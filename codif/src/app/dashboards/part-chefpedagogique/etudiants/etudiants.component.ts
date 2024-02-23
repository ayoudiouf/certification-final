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

  etudiantsparmerites: any[] = [];

  seletedEtudiantChefPeda: any;

  ListeEtudiantParOrdreMeriteService: any;

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

  }

     // Les variables de la vérification
  isnomValid:boolean = false;
  verifMessagenom: string = "";

  isprenomvalid:boolean = false;
  verifMessageisprenom: string = "";

  istelephoneValid:boolean = false;
  verifMessagetelephone: string = "";

  isemailvalid:boolean = false;
  verifMessageisemail: string = "";

  ispasswordValid:boolean = false;
  verifMessagepassword: string = "";

  isniveau_etudesValid:boolean = false;
  verifMessageniveau_etudes: string = "";

  ismoyennesValid:boolean = false;
  verifMessagemoyennes: string = "";

  islieu_naissanceValid:boolean = false;
  verifMessagelieu_naissance: string = "";

  isfiliereValid:boolean = false;
  verifMessagefiliere: string = "";

  isdate_naissanceValid:boolean = false;
  verifMessagedate_naissance: string = "";

  isINEValid:boolean = false;
  verifMessageINE: string = "";

  isadresseValid:boolean = false;
  verifMessageadresse: string = "";

  // fonction qui verifie le nom

  NomPattern1 = /^[a-zA-Z ]+$/;
  verifMessagenomFunction(){
    if(!this.nom){
      this.isnomValid = false;
      this.verifMessagenom = "Le nom est obligatoire"
    }
    else if (!this.nom.match(this.NomPattern1)) {
      this.verifMessagenom = 'Donner un nom valide';
    }
    else{
      this.isnomValid = true;
      this.verifMessagenom = "";
    }
  }

  // fonction qui verifie le prenom
  verifMessageprenomFunction(){
    if(!this.prenom){
      this.isprenomvalid = false;
      this.verifMessageisprenom = "Le prenom est obligatoire"
    }
    else if (!this.prenom.match(this.NomPattern1)) {
      this.verifMessageisprenom = 'Donner un prenom valide';
    }

    else{
      this.isprenomvalid = true;
      this.verifMessageisprenom = "";
    }
  }

  // fonction qui verifie le Numero telephone
  verifMessagetelephoneFunction(){
    if(!this.telephone){
      this.istelephoneValid = false;
      this.verifMessagetelephone = "Le Numéro telephone est obligatoire"
    } else if (isNaN(this.telephone)) {
      this.verifMessagetelephone = 'Le contact est doit etre un numerique';
    }else{
      this.istelephoneValid = true;
      this.verifMessagetelephone = "";
    }

  }

  // fonction qui verifie le niveau d'etude
  verifMessageniveau_etudesFunction(){
    if (!this.niveau_etudes) {
      this.isniveau_etudesValid = false;
      this.verifMessageniveau_etudes = "Le niveau_etudes est obligatoire"
    }
    else if (!this.niveau_etudes.match(this.NomPattern1)) {
      this.verifMessageniveau_etudes = 'Donner un nom valide';
    }
     else {
      this.isniveau_etudesValid = true;
      this.verifMessageniveau_etudes = "";
    }
  }

  // fonction qui verifie l'email
  verifMessageemailFunction(){
    if (!this.email) {
      this.isemailvalid = false;
      this.verifMessageisemail = "L'email est obligatoire"
    }
    else if (!this.email.match(this.NomPattern1)) {
      this.verifMessageisemail = 'Donner un email valide';
    }
    else {
      this.isemailvalid = true;
      this.verifMessageisemail = "";
    }
  }

  // fonction qui verifie le password
  verifMessagepasswordFunction(){
    if (!this.password) {
      this.ispasswordValid = false;
      this.verifMessagepassword = "Le password est obligatoire"
    }
    else if (!this.password.match(this.NomPattern1)) {
      this.verifMessagepassword = 'Donner un password valide';
    }

    else {
      this.ispasswordValid = true;
      this.verifMessagepassword = "";
    }
  }

   // fonction qui verifie la filiere
   verifMessagefiliereFunction(){
    if (!this.filiere) {
      this.isfiliereValid = false;
      this.verifMessagefiliere = "La filiere est obligatoire"
    }
    else if (!this.filiere.match(this.NomPattern1)) {
      this.verifMessagefiliere = 'Donner un nom valide';
    }

    else {
      this.isfiliereValid = true;
      this.verifMessagefiliere = "";
    }
  }

  // fonction qui verifie la moyenne
  verifMessagemoyennesFunction(){
    if (!this.moyennes) {
      this.ismoyennesValid = false;
      this.verifMessagemoyennes = "La moyennes est obligatoire"
    }
    else if (isNaN(this.moyennes)) {
      this.verifMessagemoyennes = 'La moyenne est doit etre un numerique';
    }
    else {
      this.ismoyennesValid = true;
      this.verifMessagemoyennes = "";
    }
  }
// fonction qui verifie la date de naissance
  verifMessagedate_naissanceFunction(){
    if (!this.date_naissance) {
      this.isdate_naissanceValid = false;
      this.verifMessagedate_naissance = "La date_naissance est obligatoire"
    } else {
      this.isdate_naissanceValid = true;
      this.verifMessagedate_naissance = "";
    }
  }

  verifMessagelieu_naissanceFunction(){
    if (!this.lieu_naissance) {
      this.islieu_naissanceValid = false;
      this.verifMessagelieu_naissance = "Le lieu_naissance est obligatoire"
    }
    else if (!this.lieu_naissance.match(this.NomPattern1)) {
      this.verifMessagelieu_naissance = 'Donner un lieu_naissance valide';
    }
    else {
      this.islieu_naissanceValid = true;
      this.verifMessagelieu_naissance = "";
    }
  }

  verifMessageINEFunction(){
    if (!this.INE) {
      this.isINEValid = false;
      this.verifMessageINE = "Le INE est obligatoire"
    }
    // else if (isNaN(this.INE)) {
    //   this.verifMessageINE = 'Le INE est doit etre un numerique';
    // }
    else {
      this.isINEValid = true;
      this.verifMessageINE = "";
    }
  }

  verifMessageadresseFunction(){
    if (!this.adresse) {
      this.isadresseValid = false;
      this.verifMessageadresse = "L'adresse est obligatoire"
    }
    else if (!this.adresse.match(this.NomPattern1)) {
      this.verifMessageadresse = 'Donner une adresse valide';
    }
     else {
      this.isadresseValid = true;
      this.verifMessageadresse = "";
    }
  }


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
    const etudiants = new EtudiantsParMeriteModel();
    etudiants.nom = this.nom;
    etudiants.prenom = this.prenom;
    etudiants.niveau_etudes = this.niveau_etudes;
    etudiants.telephone = this.telephone;
    etudiants.INE = this.INE;
    etudiants.sexe = this.sexe;
    etudiants.password = this.password;
    etudiants.email = this.email;
    etudiants.moyennes = this.moyennes;
    etudiants.filiere = this.filiere;
    etudiants.lieu_naissance = this.lieu_naissance;
    etudiants.date_naissance = this.date_naissance;

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.listeEtudiantParOrdreMeriteService.AjouterEtudiantchefPedagogique(this.profileForm.value).subscribe((response: any) => {

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


  getEtudiantParMerite(etu: any) {
    this.seletedEtudiantChefPeda = etu;
  }


}
