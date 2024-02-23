import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { chambresModel } from 'src/app/models/chambres';
import { ChambresService } from 'src/app/services/chambres.service';
import { PavillonService } from 'src/app/services/pavion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  id : string ="";
  libelle: string = "";
  type_chambre : string ="";
  nombres_lits: any ="";
  nombres_limites:  any ="";
  pavillons_id: string = "";
  etudiants_id: string = "";



  tabchambres: any[] = [];



  // libelle_chambre: any = "";
  // type_chambre_chambre: any = "";
  // nombres_lits_chambre: any = "";
  // nombres_limites_chambre: any = "";
  // pavillons_id_chambre: any;
  // etudiants_id_chambre: any;

  chambre: any;
  tabpavillons: any;

  ngOnInit(): void {

    this.getAllChambre();
    // this.getPavillons();

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
  constructor(
    private ChambreServices: ChambresService,
    private formbuilder: FormBuilder,
    private route: Router,
    private Pavillonservice : PavillonService
    ) {

  }

  // Les variables de la vérification
  islibelleValid:boolean = false;
  verifMessagelibelle: string = "";

  isnombres_litsValid:boolean = false;
  verifMessageisnombres_litsValid: string = "";

  isnombres_limitesValid:boolean = false;
  verifMessagenombres_limites: string = "";

  NomPattern1 = /^[a-zA-Z ]+$/;
  verifMessagelibelleFunction(){
    if(!this.libelle){
      this.islibelleValid = false;
      this.verifMessagelibelle = "Le libelle est obligatoire"
    }
    else if (!this.libelle.match(this.NomPattern1)) {
      this.verifMessagelibelle = 'Donner une libelle valide';
    }
     else{
      this.islibelleValid = true;
      this.verifMessagelibelle = "";
    }
  }

  verifMessagenombres_limitesFunction(){
    if(!this.nombres_limites){
      this.isnombres_limitesValid = false;
      this.verifMessagenombres_limites = "Le champ est obligatoire"
    }
    else if (isNaN(this.nombres_limites)) {
      this.nombres_limites = 'Le nombres_limites est doit etre un numerique';
    }
    else{
      this.isnombres_limitesValid = true;
      this.verifMessagenombres_limites = "";
    }
  }

  verifMessagenombres_litsFunction(){
    if(!this.nombres_lits){
      this.isnombres_litsValid = false;
      this.verifMessageisnombres_litsValid = "Le champ est obligatoire"
    }
    else if (isNaN(this.nombres_lits)) {
      this.verifMessageisnombres_litsValid = 'Le nombres_lits est doit etre un numerique';
    }
    else{
      this.isnombres_litsValid = true;
      this.verifMessageisnombres_litsValid = "";
    }
  }


profileForm: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],

});

profileFormEdite: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],

});

// ...

ajouterChambre() {
  // Utilisez les valeurs du formulaire correctes
  const chambres = new chambresModel();
  chambres.libelle = this.libelle;
  chambres.type_chambre = this.profileForm.value.type_chambre;
  chambres.nombres_lits = this.profileForm.value.nombres_lits;
  chambres.nombres_limites = this.profileForm.value.nombres_limites;
  chambres.pavillons_id = this.profileForm.value.pavillons_id;
  // chambres.etudiants_id = this.profileForm.value.etudiants_id;

  console.log(this.profileForm.value);
  const userOnline = JSON.parse(localStorage.getItem('userOnline') || '');
  this.ChambreServices.postchambre(chambres).subscribe((response: any) => {
    console.log(response);
  });
}


    // Fonction pour lister les etudiant Chambre
    getAllChambre(){
    this.ChambreServices.getAllChambre().subscribe((reponse:any) =>{
      this.tabchambres =  reponse;
      console.log("neekkk", this. tabchambres);
    },
    );
  }

  // seletedChambre: any = {};
  chambreChoisi: any;
  // lilibelleUse:string


   chargerChambre(chambreEtuduant: any) {
    // if(chambreEtuduant && chambreEtuduant.id)
    // {

      // this.libelle = chambreEtuduant.libelle;
      this.id = chambreEtuduant.id;
      this.libelle = chambreEtuduant.libelle;
      this.nombres_lits = chambreEtuduant.nombres_lits;
      this.type_chambre = chambreEtuduant.type_chambre;
      this.nombres_limites = chambreEtuduant.nombres_limites;
    // }


    console.log("Chambre à charger :", chambreEtuduant.id);
}




  putChambreAdmin(){
    // console.log("chambrechoisi", this.id )
  //  if(this.chambreChoisi){
  this.ChambreServices.putChambreAdmin(this.id,{
  libelle: this.libelle,
  nombres_limites: this.nombres_limites,
  nombres_lits: this.nombres_lits,
  type_chambre: this.type_chambre,

}).subscribe((Response : any)=>{
  console.log("odifiond", Response);
})
  //  }
  }


  // deletechambre(id: any){
  //   console.log("Deleting chambre with ID:", id);
  //   this.ChambreServices.deleteChambre(id).subscribe((res: any) => {
  //         console.log(res);
  //         console.warn("Delete response:", res);
  //       });
  //       this.getAllChambre();

  // }

  deletechambre(id: any) {
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
        this.ChambreServices.deleteChambre(id).subscribe((res: any) => {
          console.log(res);
       // console.warn("Delete response:", res);
        });
        this.getAllChambre();
      }
    });
  }


  // getChambre(chambre: any) {
  //   this.seletedChambre = chambre;
  // }

    // Fonction pour lister les utilisateurs
    // getPavillons(){

    //   this.Pavillonservice.listepavillon().subscribe((reponse:any) =>{
    //       this.tabpavillons =  reponse.Pavillon;
    //       console.log(this.tabpavillons);

    //   });

    // }

}
