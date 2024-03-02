import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantsParMeriteModel } from 'src/app/models/ListeEtudiantParMerite';
import { ListeEtudiantParOrdreMeriteService } from 'src/app/services/liste-etudiant-par-ordre-merite.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent  implements OnInit{
  dtOptions: DataTables.Settings = {};

  nom:any;
  prenom:any;
  email:any;
  password:any;
  niveau_etudes:any;
  moyennes:any;
  telephone:any;
  sexe:any;
  filiere:any;
  INE:any;
  adresse:any;
  lieu_naissance:any;
  date_naissance:any;
  yesterday:any;

  etudiantsparmerites: any[] = [];

  seletedEtudiantChefPeda: any;

  ListeEtudiantParOrdreMeriteService: any;
  public truthyTab: any[] = [];

  ngOnInit(): void {
    this.getAllEtudiantParMerite();

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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
  constructor(private listeEtudiantParOrdreMeriteService: ListeEtudiantParOrdreMeriteService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){
      const today = new Date();
      this.yesterday = new Date(today);
      this.yesterday.setDate(today.getDate() - 1);
  }

     // Les variables de la vérification
  // isnomValid:boolean = false;
  // verifMessagenom: string = "";

  // isprenomvalid:boolean = false;
  // verifMessageisprenom: string = "";

  // istelephoneValid:boolean = false;
  // verifMessagetelephone: string = "";

  // isemailvalid:boolean = false;
  // verifMessageisemail: string = "";

  // ispasswordValid:boolean = false;
  // verifMessagepassword: string = "";

  // isniveau_etudesValid:boolean = false;
  // verifMessageniveau_etudes: string = "";

  // ismoyennesValid:boolean = false;
  // verifMessagemoyennes: string = "";

  // islieu_naissanceValid:boolean = false;
  // verifMessagelieu_naissance: string = "";

  // isfiliereValid:boolean = false;
  // verifMessagefiliere: string = "";

  // isdate_naissanceValid:boolean = false;
  // verifMessagedate_naissance: string = "";

  // isINEValid:boolean = false;
  // verifMessageINE: string = "";

  // isadresseValid:boolean = false;
  // verifMessageadresse: string = "";

  // // fonction qui verifie le nom

  // NomPattern1 = /^[a-zA-Z ]+$/;
  // verifMessagenomFunction(){
  //   if(!this.nom){
  //     this.isnomValid = false;
  //     this.verifMessagenom = "Le nom est obligatoire"
  //   }
  //   else if (!this.nom.match(this.NomPattern1)) {
  //     this.verifMessagenom = 'Donner un nom valide';
  //   }
  //   else{
  //     this.isnomValid = true;
  //     this.verifMessagenom = "";
  //   }
  // }

  // // fonction qui verifie le prenom
  // verifMessageprenomFunction(){
  //   if(!this.prenom){
  //     this.isprenomvalid = false;
  //     this.verifMessageisprenom = "Le prenom est obligatoire"
  //   }
  //   else if (!this.prenom.match(this.NomPattern1)) {
  //     this.verifMessageisprenom = 'Donner un prenom valide';
  //   }

  //   else{
  //     this.isprenomvalid = true;
  //     this.verifMessageisprenom = "";
  //   }
  // }

  // // fonction qui verifie le Numero telephone
  // verifMessagetelephoneFunction(){
  //   if(!this.telephone){
  //     this.istelephoneValid = false;
  //     this.verifMessagetelephone = "Le Numéro telephone est obligatoire"
  //   } else if (isNaN(this.telephone)) {
  //     this.verifMessagetelephone = 'Le contact est doit etre un numerique';
  //   }else{
  //     this.istelephoneValid = true;
  //     this.verifMessagetelephone = "";
  //   }

  // }

  // fonction qui verifie le niveau d'etude
  // verifMessageniveau_etudesFunction(){
  //   if (!this.niveau_etudes) {
  //     this.isniveau_etudesValid = false;
  //     this.verifMessageniveau_etudes = "Le niveau_etudes est obligatoire"
  //   }
  //   else if (!this.niveau_etudes.match(this.NomPattern1)) {
  //     this.verifMessageniveau_etudes = 'Donner un nom valide';
  //   }
  //    else {
  //     this.isniveau_etudesValid = true;
  //     this.verifMessageniveau_etudes = "";
  //   }
  // }


  // verifMessageemailFunction(){
  //   if (!this.email) {
  //     this.isemailvalid = false;
  //     this.verifMessageisemail = "L'email est obligatoire"
  //   }
  //   else if (!this.email.match(this.NomPattern1)) {
  //     this.verifMessageisemail = 'Donner un email valide';
  //   }
  //   else {
  //     this.isemailvalid = true;
  //     this.verifMessageisemail = "";
  //   }
  // }


  // verifMessagepasswordFunction(){
  //   if (!this.password) {
  //     this.ispasswordValid = false;
  //     this.verifMessagepassword = "Le password est obligatoire"
  //   }
  //   else if (!this.password.match(this.NomPattern1)) {
  //     this.verifMessagepassword = 'Donner un password valide';
  //   }

  //   else {
  //     this.ispasswordValid = true;
  //     this.verifMessagepassword = "";
  //   }
  // }


  //  verifMessagefiliereFunction(){
  //   if (!this.filiere) {
  //     this.isfiliereValid = false;
  //     this.verifMessagefiliere = "La filiere est obligatoire"
  //   }
  //   else if (!this.filiere.match(this.NomPattern1)) {
  //     this.verifMessagefiliere = 'Donner un nom valide';
  //   }

  //   else {
  //     this.isfiliereValid = true;
  //     this.verifMessagefiliere = "";
  //   }
  // }


  // verifMessagemoyennesFunction(){
  //   if (!this.moyennes) {
  //     this.ismoyennesValid = false;
  //     this.verifMessagemoyennes = "La moyennes est obligatoire"
  //   }
  //   else if (isNaN(this.moyennes)) {
  //     this.verifMessagemoyennes = 'La moyenne est doit etre un numerique';
  //   }
  //   else {
  //     this.ismoyennesValid = true;
  //     this.verifMessagemoyennes = "";
  //   }
  // }

  // verifMessagedate_naissanceFunction(){
  //   if (!this.date_naissance) {
  //     this.isdate_naissanceValid = false;
  //     this.verifMessagedate_naissance = "La date_naissance est obligatoire"
  //   } else {
  //     this.isdate_naissanceValid = true;
  //     this.verifMessagedate_naissance = "";
  //   }
  // }

  // verifMessagelieu_naissanceFunction(){
  //   if (!this.lieu_naissance) {
  //     this.islieu_naissanceValid = false;
  //     this.verifMessagelieu_naissance = "Le lieu_naissance est obligatoire"
  //   }
  //   else if (!this.lieu_naissance.match(this.NomPattern1)) {
  //     this.verifMessagelieu_naissance = 'Donner un lieu_naissance valide';
  //   }
  //   else {
  //     this.islieu_naissanceValid = true;
  //     this.verifMessagelieu_naissance = "";
  //   }
  // }

  // verifMessageINEFunction(){
  //   if (!this.INE) {
  //     this.isINEValid = false;
  //     this.verifMessageINE = "Le INE est obligatoire"
  //   }

  //   else {
  //     this.isINEValid = true;
  //     this.verifMessageINE = "";
  //   }
  // }

  // verifMessageadresseFunction(){
  //   if (!this.adresse) {
  //     this.isadresseValid = false;
  //     this.verifMessageadresse = "L'adresse est obligatoire"
  //   }
  //   else if (!this.adresse.match(this.NomPattern1)) {
  //     this.verifMessageadresse = 'Donner une adresse valide';
  //   }
  //    else {
  //     this.isadresseValid = true;
  //     this.verifMessageadresse = "";
  //   }
  // }


  profileForm: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    telephone: ['', Validators.required],
    sexe: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    moyennes: ['', Validators.required],
    filiere: ['', Validators.required],
    INE: ['', Validators.required],
    adresse: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
    date_naissance: ['', Validators.required],
  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    telephone: ['', Validators.required],
    sexe: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    moyennes: ['', Validators.required],
    filiere: ['', Validators.required],
    INE: ['', Validators.required],
    adresse: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
    date_naissance: ['', Validators.required],
  });

  //  fonction pour ajouter
   ajouterEtudiant() {
    // const etudiants = new EtudiantsParMeriteModel();
    // etudiants.nom = this.nom;
    // etudiants.prenom = this.prenom;
    // etudiants.niveau_etudes = this.niveau_etudes;
    // etudiants.telephone = this.telephone;
    // etudiants.INE = this.INE;
    // etudiants.sexe = this.sexe;
    // etudiants.password = this.password;
    // etudiants.email = this.email;
    // etudiants.moyennes = this.moyennes;
    // etudiants.filiere = this.filiere;
    // etudiants.lieu_naissance = this.lieu_naissance;
    // etudiants.date_naissance = this.date_naissance;

    let donne = {
      nom: this.nom,
      prenom: this.prenom,
      niveau_etudes: this.niveau_etudes,
      email: this.email,
      INE: this.INE,
      filiere: this.filiere,
      password: this.password,
      telephone: this.telephone,
      moyennes: this.moyennes,
      sexe: this.sexe,
      adresse: this.adresse,
      lieu_naissance: this.lieu_naissance,
      date_naissance: this.date_naissance,

      }

    console.log(donne);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.listeEtudiantParOrdreMeriteService.AjouterEtudiantchefPedagogique(donne).subscribe((response: any) => {

      console.log(response);

      this.getAllEtudiantParMerite();
    });

  }



  getAllEtudiantParMerite() {
    this.listeEtudiantParOrdreMeriteService.getAllEtudiantParMerite().subscribe((reponse: any) => {
      console.log('la reponse du baken est ',reponse)
      this.etudiantsparmerites = reponse;
      // console.log('je suis etudiant',reponse);



    });
  }

  etudiantChoisi: any


  chargerEtudiant(etudiant: EtudiantsParMeriteModel) {

   this.etudiantChoisi=etudiant;
   this.nom = etudiant.nom;
   this.prenom = etudiant.prenom;
   this.niveau_etudes = etudiant.niveau_etudes;
   this.telephone = etudiant.telephone;
   this.INE = etudiant.INE;
   this.adresse = etudiant.adresse;
   console.log("Etudiant à charger :", etudiant);
}




EditEtutudiant(){
   console.log("chambrechoisi", this.etudiantChoisi.id )
   const etudiant1Choisi={
     nom : this.nom,
     prenom : this.prenom,
     niveau_etudes : this.niveau_etudes ,
     telephone : this.telephone,
     INE : this.INE,
     adresse : this.adresse,
   }

   this.ListeEtudiantParOrdreMeriteService.putChambreAdmin(this.etudiantChoisi.id ,etudiant1Choisi).subscribe((res: any) => {
     console.log(res);
   });
 }


  // getEtudiantParMerite(etu: any) {
  //   this.seletedEtudiantChefPeda = etu;
  // }

   // validations

   emailValidate() {
    console.warn(this.email);
    let validationEmail = document.getElementById('validationEmail');
    const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
    // const emailRegexEnd = /^[a-z]{2,}$/;
    // this.emailError = emailRegexGegin.test(this.email);
    if (emailRegexGegin.test(this.email)) {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'Valide';
      validationEmail!.classList.remove('error');
      validationEmail!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.email== true) == undefined) {
        this.truthyTab.push({ email: true });
      }
      console.log(this.truthyTab);
    } else {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'Invalide';
      validationEmail!.classList.remove('success');
      validationEmail!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.email == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.email == true), 1);
      }

    }
    if (this.email == "") {
      validationEmail!.innerHTML = "";
    }
    // console.log(this.truthyTab);
  }

  nomValidate() {
    let validationNom = document.getElementById('validationNom');

    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.nom)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'Valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.nom==true)==undefined) {
        this.truthyTab.push({nom:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'Invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.nom==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.nom==true),1);
      }
    }
    if (this.nom=="") {
      validationNom!.innerHTML="";
    }
  }
  prenomValidate() {
    let validationPrenom = document.getElementById('validationPrenom');
    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.prenom)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.prenom==true)==undefined) {
        this.truthyTab.push({prenom:true});
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.prenom==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.prenom==true),1);
      }
    }
    if (this.prenom=="") {
      validationPrenom!.innerHTML="";
    }
  }

  telephoneValidate() {
    let validationPrenom = document.getElementById('validationTelephone');
    const nomPrenomRegex = /^(77|76|75|78|33)[0-9]{7}$/;
    if (nomPrenomRegex.test(this.telephone)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.telephone==true)==undefined) {
        this.truthyTab.push({telephone:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.telephone==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.telephone==true),1);
      }
    }
    if (this.telephone=="") {
      validationPrenom!.innerHTML="";
    }
  }

  filiereValidate() {
    let validationPrenom = document.getElementById('validationFiliere');
    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.filiere)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.filiere==true)==undefined) {
        this.truthyTab.push({filiere:true});
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.filiere==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.filiere==true),1);
      }
    }
    if (this.filiere=="") {
      validationPrenom!.innerHTML="";
    }
  }
  INEValidate() {
    let validationPrenom = document.getElementById('validationINE');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.INE)) {
      // console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.INE==true)==undefined) {
        this.truthyTab.push({INE:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.INE==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.INE==true),1);
      }
    }
    if (this.INE=="") {
      validationPrenom!.innerHTML="";
    }
  }

  adresseValidate() {
    let validationPrenom = document.getElementById('validationAdresse');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.adresse)) {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.adresse==true)==undefined) {
        this.truthyTab.push({adresse:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.adresse==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.adresse==true),1);
      }
    }
    if (this.adresse=="") {
      validationPrenom!.innerHTML="";
    }
  }

  passwordValidate() {
    let validationPrenom = document.getElementById('validationPassword');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9-@_&]{7,}$/;
    if (nomPrenomRegex.test(this.password)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.password==true)==undefined) {
        this.truthyTab.push({password:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.password==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.password==true),1);
      }
    }
    if (this.password=="") {
      validationPrenom!.innerHTML="";
    }
    // console.log(this.truthyTab);
    // console.log(this.truthyTab.length);
  }

  genreValidate() {

      if (this.truthyTab.find((value:any)=>value.genre==true)==undefined) {
        this.truthyTab.push({genre:true});
      }


  }

  moyennesValidate() {
    let validationPrenom = document.getElementById('validationMoyennes');
    const nomPrenomRegex = /^[0-9]+[0-9]$/;
    if (nomPrenomRegex.test(this.moyennes)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.moyennes==true)==undefined) {
        this.truthyTab.push({moyennes:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.moyennes==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.moyennes==true),1);
      }
    }
    if (this.moyennes=="") {
      validationPrenom!.innerHTML="";
    }
  }

  dateValidate() {
    let validationPrenom = document.getElementById('validationNaissance');
    let inputDate = document.getElementById('inputDate');
    console.warn(inputDate)
    // inputDate!.ariaValueMax='Thu Feb 22 2005 00:00:00 GMT+0000';
    const nomPrenomRegex = /^[0-9]+[/]+[0-9]+[/]+[0-9]{2005,}$/;
    if (nomPrenomRegex.test(this.date_naissance)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');


    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');

    }
  }

  niveau_etudesValidate() {
    let validationPrenom = document.getElementById('validationNiveauetudes');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.niveau_etudes)) {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.niveau_etudes==true)==undefined) {
        this.truthyTab.push({niveau_etudes:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.niveau_etudes==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.niveau_etudes==true),1);
      }
    }
    if (this.niveau_etudes=="") {
      validationPrenom!.innerHTML="";
    }
  }

lieu_naissanceValidate() {
  let validationPrenom = document.getElementById('validationLieunaissance');
  const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
  if (nomPrenomRegex.test(this.lieu_naissance)) {
    // console.log(nomPrenomRegex.test(this.prenom));
    validationPrenom!.innerHTML = 'Valide';
    validationPrenom!.classList.remove('error');
    validationPrenom!.classList.add('success');
    if (this.truthyTab.find((value:any)=>value.lieu_naissance==true)==undefined) {
      this.truthyTab.push({lieu_naissance:true});
    }
  } else {
    // console.log(nomPrenomRegex.test(this.prenom));
    validationPrenom!.innerHTML = 'Invalide';
    validationPrenom!.classList.remove('success');
    validationPrenom!.classList.add('error');
    if (this.truthyTab.find((value:any)=>value.lieu_naissance==true)!=undefined) {
      this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.lieu_naissance==true),1);
    }
  }
  if (this.lieu_naissance=="") {
    validationPrenom!.innerHTML="";
  }
}

}
