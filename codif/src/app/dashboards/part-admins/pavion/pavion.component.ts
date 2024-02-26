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
  public truthyTab: any[] = [];

  selectedPavillon:any;
  libelle: any;
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;
  tabpavillons: any;
  pavillonModel: any;

  pavillons:PavillonModel=new PavillonModel()


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
    // pavillon.libelle = this.libelle;
    // pavillon.type_pavillon = this.type_pavillon;
    // pavillon.nombres_etages = this.nombres_etages;
    // pavillon.nombres_chambres = this.nombres_chambres

    let donne = {
      libelle: this.libelle,
      type_pavillon: this.type_pavillon,
      nombres_etages: this.nombres_etages,
      // nombres_etages: this.nombres_etages,
      nombres_chambres: this.nombres_chambres,

    }

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

  libelleValidate() {
    let validationLibelle = document.getElementById('validationLibelle');

    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.libelle)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationLibelle!.innerHTML = 'valide';
      validationLibelle!.classList.remove('error');
      validationLibelle!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.libelle == true) == undefined) {
        this.truthyTab.push({ libelle: true });
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationLibelle!.innerHTML = 'invalide';
      validationLibelle!.classList.remove('success');
      validationLibelle!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.libelle == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.libelle == true), 1);
      }
    }
    if (this.libelle == "") {
      validationLibelle!.innerHTML = "";
    }
  }



  nombreetagesValidate() {
    let validationPrenom = document.getElementById('validationNombreEtage');
    const nomPrenomRegex = /^[0-9]$/;
    if (nomPrenomRegex.test(this.nombres_etages)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.nombres_etages==true)==undefined) {
        this.truthyTab.push({nombres_etages:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.nombres_etages==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.nombres_etages==true),1);
      }
    }
    if (this.nombres_etages=="") {
      validationPrenom!.innerHTML="";
    }
  }

  pavillonValidate() {
    let validationPrenom = document.getElementById('validationNombrechambre');
    const nomPrenomRegex = /^[0-9]$/;
    if (nomPrenomRegex.test(this.nombres_chambres)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.nombres_chambres==true)==undefined) {
        this.truthyTab.push({nombres_chambres:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.nombres_chambres==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.nombres_chambres==true),1);
      }
    }
    if (this.nombres_chambres=="") {
      validationPrenom!.innerHTML="";
    }
  }

  nombrechambreValidate() {
    let validationPrenom = document.getElementById('validationNombrechambre');
    const nomPrenomRegex = /^[0-9]+[0-9]$/;
    if (nomPrenomRegex.test(this.nombres_chambres)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.nombres_chambres==true)==undefined) {
        this.truthyTab.push({nombres_chambres:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.nombres_chambres==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.nombres_chambres==true),1);
      }
    }
    if (this.nombres_chambres=="") {
      validationPrenom!.innerHTML="";
    }
  }

}

