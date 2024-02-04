import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { chambresModel } from 'src/app/models/chambres';
import { ChambresService } from 'src/app/services/chambres.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  libelle: any;
  type_chambre : any;
  nombres_lits: any;
  nombres_limites: any;
  pavillons_id: any;
  etudiants_id: any;



  tabchambres: any[] = [];



  libelle_chambre: any = "";
  type_chambre_chambre: any = "";
  nombres_lits_chambre: any = "";
  nombres_limites_chambre: any = "";
  pavillons_id_chambre: any;
  etudiants_id_chambre: any;

  chambre: any;


  ngOnInit(): void {

    this.getAllChambre();

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
  constructor(private ChambreServices: ChambresService, private formbuilder: FormBuilder, private route: Router) {

  }

  profileForm: FormGroup = this.formbuilder.group({
    libelle_chambre: ['', Validators.required],
    type_chambre_chambre: ['', Validators.required],
    nombres_lits_chambre: ['', Validators.required],
    nombres_limites_chambre: ['', Validators.required],
    pavillons_id_chambre: ['', Validators.required],
    etudiants_id_chambre: ['', Validators.required],


  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    libelle_chambre: ['', Validators.required],
    type_chambre_chambre: ['', Validators.required],
    nombres_lits_chambre: ['', Validators.required],
    nombres_limites_chambre: ['', Validators.required],
    pavillons_id_chambre: ['', Validators.required],
    etudiants_id_chambre: ['', Validators.required],
  });


  // fonction pour ajouter
  ajouterChambre() {
    const chambres = new chambresModel();
    chambres.libelle = this.libelle;
    chambres.type_chambre = this.type_chambre;
    chambres.nombres_lits = this.nombres_lits;
    chambres.nombres_limites = this.nombres_limites;
    chambres.pavillons_id = this.pavillons_id;
    chambres.etudiants_id = this.etudiants_id;
    chambres.libelle = this.libelle;
    chambres.type_chambre = this.type_chambre;
    chambres.nombres_lits = this.nombres_lits;
    chambres.nombres_limites = this.nombres_limites;
    chambres.pavillons_id = this.pavillons_id;
    chambres.etudiants_id = this.etudiants_id;



    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.ChambreServices.postchambre(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });


  }



    // Fonction pour lister les etudiant Chambre
    getAllChambre(){

    this.ChambreServices.getAllChambre().subscribe((reponse:any) =>{
      console.log(reponse);
        this.tabchambres =  reponse.Chambre;


    },

     );
    // console.log("ddddddd");
  }

  seletedChambre: any = {};
  // methode pour charger element a modifier dans formulaire
  // seletedChambre: any = {};
  chambreChoisi:any
  chargerChambre(chambreEtuduant: chambresModel) {
    this.chambreChoisi=chambreEtuduant.id;
    this.libelle = chambreEtuduant.libelle;
    this.nombres_lits = chambreEtuduant.nombres_lits;
    this.type_chambre = chambreEtuduant.type_chambre;
    this.nombres_limites = chambreEtuduant.nombres_limites;
    this.pavillons_id = chambreEtuduant.pavillons_id;
    this.etudiants_id = chambreEtuduant.etudiants_id;

  }

  // chargerPavillon(pav: PavillonModel) {
  //   this.pavillonChoisi=pav.id;
  //   this.libelle = pav.libelle;
  //   this.nombres_chambres = pav.nombres_chambres;
  //   this.type_pavillon = pav.type_pavillon;
  //   this.nombres_etages = pav.nombres_etages;
  // }

  // editerPavillon() {

  //   const pavChoisi={
  //   libelle : this.libelle,
  //   type_pavillon : this.type_pavillon,
  //   nombres_etages : this.nombres_etages,
  //   nombres_chambres :this.nombres_chambres
  // }
  //   this.PavillonService.editPavillon(pavChoisi, this.pavillonChoisi).subscribe((res: any) => {
  //     console.log(res);
  //   });
  //   this.getPavillons();
  // }
  getChambre(chambre: any) {
    this.seletedChambre = chambre;
  }

}
