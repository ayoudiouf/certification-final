import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PavillonModel } from 'src/app/models/pavillon';
import { PavillonService } from 'src/app/services/pavion.service';
// import 'datatables.net';

@Component({
  selector: 'app-pavillon',
  templateUrl: './pavion.component.html',
  styleUrls: ['./pavillon.component.css']
})
export class PavionComponent implements OnInit {
  [x: string]: any;


  selectedPavillon:any;
  dtOptions: DataTables.Settings = {};
  libelle: string='';
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;
  pavillons:PavillonModel=new PavillonModel()



  libelle_pavillon: any = "";
  type_pavillon_pavillon: any = "";
  nombres_etages_pavillon: any = "";
  nombres_chambres_pavillon: any = "";
  tabpavillons: any;
  pavillonModel: any;


  ngOnInit(): void {
    this.getPavillons();

    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

  }
  constructor(private PavillonService: PavillonService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient
    ) {
  }

  profileForm: FormGroup = this.formbuilder.group({
    libelle: ['', Validators.required],
    type_pavillon: ['', Validators.required],
    nombres_etages: ['', Validators.required],
    nombres_chambres: ['', Validators.required],
  });

  profileFormEdit: FormGroup = this.formbuilder.group({
    libelleEdition: ['', Validators.required],
    type_pavillonEdition: ['', Validators.required],
    nombres_etagesEdition: ['', Validators.required],
    nombres_chambresEdition: ['', Validators.required],
  });


  // fonction pour ajouter
  ajouterPavillon() {
    const pavillon = new PavillonModel();
    pavillon.libelle = this.libelle_pavillon;
    pavillon.type_pavillon = this.type_pavillon;
    pavillon.nombres_etages = this.nombres_etages;
    pavillon.nombres_chambres = this.nombres_chambres

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.PavillonService.userConnect(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });
    this.getPavillons();

  }

    // Fonction pour lister les utilisateurs
  getPavillons(){

    this.PavillonService.listepavillon().subscribe((reponse:any) =>{
        this.tabpavillons =  reponse.Pavillon;
        console.log(this.tabpavillons);

    });

  }
  // methode pour charger element a modifier dans formulaire
  seletedPavillon: any = {};
  pavillonChoisi:any
  chargerPavillon(pav: PavillonModel) {
    this.pavillonChoisi=pav.id;
    this.libelle = pav.libelle;
    this.nombres_chambres = pav.nombres_chambres;
    this.type_pavillon = pav.type_pavillon;
    this.nombres_etages = pav.nombres_etages;
  }

  editerPavillon() {

    const pavChoisi={
    libelle : this.libelle,
    type_pavillon : this.type_pavillon,
    nombres_etages : this.nombres_etages,
    nombres_chambres :this.nombres_chambres
  }
    this.PavillonService.editPavillon(pavChoisi, this.pavillonChoisi).subscribe((res: any) => {
      console.log(res);
    });
    this.getPavillons();
  }

  deletePavillon(id:any) {
    this.PavillonService.deletePavillon(id).subscribe((res: any) => {
      console.log(res);
    });
    this.getPavillons();
  }

  getPavillon(pavillon: any) {
    this.seletedPavillon = pavillon;
  }


}

