import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PavillonModel } from 'src/app/models/pavillon';
import { PavillonService } from 'src/app/services/pavion.service';
import Swal from 'sweetalert2';
// import 'datatables.net';

@Component({
  selector: 'app-pavillon',
  templateUrl: './pavion.component.html',
  styleUrls: ['./pavillon.component.css']
})
export class PavionComponent implements OnInit {
  // [x: string]: any;
  dtOptions: DataTables.Settings = {};

  selectedPavillon:any;
  libelle: any;
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;
  pavillons:PavillonModel=new PavillonModel()
  tabpavillons: any;
  pavillonModel: any;



  // libelle_pavillon: any = "";
  // type_pavillon_pavillon: any = "";
  // nombres_etages_pavillon: any = "";
  // nombres_chambres_pavillon: any = "";


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
  constructor(private Pavillonservice: PavillonService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

  }

  // Les variables de la vérification
  islibelleValid:boolean = false;
  verifMessagelibelle: string = "";

  NomPattern1 = /^[a-zA-Z ]+$/;

  verifMessagelibelleFunction(){
    if(!this.libelle){
      this.islibelleValid = false;
      this.verifMessagelibelle = "Le libelle est obligatoire"
    }
    else if (!this.libelle.match(this.NomPattern1)) {
      this.verifMessagelibelle = 'Donner un libelle valide';
    }

    else{
      this.islibelleValid = true;
      this.verifMessagelibelle = "";
    }
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
    pavillon.libelle = this.libelle;
    pavillon.type_pavillon = this.type_pavillon;
    pavillon.nombres_etages = this.nombres_etages;
    pavillon.nombres_chambres = this.nombres_chambres

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.Pavillonservice.userConnect(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

      this.getPavillons();
    });

  }

    // Fonction pour lister les utilisateurs
  getPavillons(){

    this.Pavillonservice.listepavillon().subscribe((reponse:any) =>{
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
    this.Pavillonservice.editPavillon(pavChoisi, this.pavillonChoisi).subscribe((res: any) => {
      console.log(res);
    });
    this.getPavillons();
  }

  // deletePavillon(id:any) {
  //   this.Pavillonservice.deletePavillon(id).subscribe((res: any) => {
  //     console.log('la response est ',res);

  //   });
  //   this.getPavillons();
  // }
  // deletePavillon(id: any) {
  //   const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce pavillon ?");
  //   if (confirmation) {
  //     this.Pavillonservice.deletePavillon(id).subscribe((res: any) => {
  //       console.log('la response est ',res);
  //       // Mettre à jour ou traiter toute autre logique après la suppression
  //     });
  //     this.getPavillons();
  //   }
  // }

  deletePavillon(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme la suppression
        this.Pavillonservice.deletePavillon(id).subscribe((res: any) => {
          console.log('la response est ',res);
          // Mettre à jour ou traiter toute autre logique après la suppression
        });
        this.getPavillons();
      }
    });
  }



}

