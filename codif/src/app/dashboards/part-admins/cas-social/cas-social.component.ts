import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsModel } from 'src/app/models/etudiants'

@Component({
  selector: 'app-cas-social',
  templateUrl: './cas-social.component.html',
  styleUrls: ['./cas-social.component.css']
})
export class CasSocialComponent implements OnInit{
  CasSocialModel: any

  dtOptions: DataTables.Settings = {};
  INE: string='';
  nom: string='';
  prenom: any;
  email: any;
  telephone: any;
  sexe: any;
  niveau_etudes: any;
  filiere: any;
  adresse: any;
  statuts: any;
  lieu_naissance: any;
  date_naissance: any;

  INE_cassocial: any = "";
  nom_cassocial: any = "";
  prenom_cassocial: any = "";
  email_cassocial: any = "";
  password_cassocial: any = "";
  telephone_cassocial: any = "";
  sexe_cassocial: any = "";
  filiere_cassocial: any = "";
  statuts_id: any = "";
  adresse_cassocial: any = "";
  // date_naissance: any = "";

  cassocials: any;



  ngOnInit(): void {


    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
    this.getAllEtudiantCasSocial()
  }
  constructor(private CassocialService: CassocialService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient) {

  }

   // Les variables de la vérification
   isnomValid:boolean = false;
   verifMessagenom: string = "";


   isprenomValid:boolean = false;
   verifMessageprenom: string = "";

   isEmailValid:boolean = false;
   verifMessageEmail: string = "";

   isINEValid:boolean = false;
   verifMessageINE: string = "";

   isFiliereValid:boolean = false;
   verifMessageFiliere: string = "";

   isAdresseValid:boolean = false;
   verifMessageAdresse: string = "";

   isPasswordValid:boolean = false;
   verifMessagePassword: string = "";

   isSexeValid:boolean = false;
   verifMessageSexe: string = "";

   isNiveauEtudesValid:boolean = false;
   verifMessageNiveauEtudes: string = "";

   isLieuDeNaissanceValid:boolean = false;
   verifMessageLieuDeNaissance: string = "";

   isDatedeNaissanceValid:boolean = false;
   verifMessageDatedeNaissance: string = "";


   validateEmail(email: string): boolean {
     const emailRegex=/^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
     return emailRegex.test(email);
   }

   istelephoneValid:boolean = false;
   verifMessageistelephoneValid: string = "";

   verifEmailFunction(){
    this.isEmailValid = this.validateEmail(this.email);
    if(!this.email){
      this.verifMessageEmail = "L'email est obligatoire"
    }else if(!this.isEmailValid){
      this.verifMessageEmail = "Le format de l'email est incorrect";
    } else{
        this.verifMessageEmail = "";
        this.isEmailValid = true;
      }
  }

   verifMessagenomFunction(){

    if(this.nom===""){
      this.isnomValid= false;
    }
     if(!this.nom){
       this.isnomValid = false;
       this.verifMessagenom = "Le nom est obligatoire"
     } else{
       this.isnomValid = true;
       this.verifMessagenom = "";
     }

   }

   verifMessageprenomFunction(){
     if(!this.prenom){
       this.isprenomValid = false;
       this.verifMessageprenom = "Le prenom est obligatoire"
     } else{
       this.isprenomValid = true;
       this.verifMessageprenom = "";
     }
   }

   verifMessagetelephoneFunction(){
     if(!this.telephone){
       this.istelephoneValid = false;
       this.verifMessageistelephoneValid = "Le numero telephone est obligatoire"
     } else{
       this.istelephoneValid = true;
       this.verifMessageistelephoneValid = "";
     }
   }

   verifMessagefiliereFunction(){
    if(!this.filiere){
      this.isFiliereValid = false;
      this.verifMessageFiliere = "Le champs est obligatoire"
    } else{
      this.isFiliereValid = true;
      this.verifMessageFiliere = "";
    }
    if(this.filiere == ''){
      this.verifMessageFiliere ='';
    }
  }
  verifMessageINEFunction(){
    if(!this.INE){
      this.isINEValid = false;
      this.verifMessageINE = "INE est obligatoire"
    } else{
      this.isINEValid = true;
      this.verifMessageINE = "";
    }
  }
  verifMessageAdresseFunction(){
    if(!this.adresse){
      this.isAdresseValid = false;
      this.verifMessageAdresse = "Adresse est obligatoire"
    } else{
      this.isAdresseValid = true;
      this.verifMessageAdresse = "";
    }
  }
  verifMessageNiveauEtudesFunction(){
    if(!this.adresse){
      this.isNiveauEtudesValid = false;
      this.verifMessageNiveauEtudes = "Le champs est obligatoir est obligatoire"
    } else{
      this.isNiveauEtudesValid = true;
      this.verifMessageNiveauEtudes = "";
    }
  }

  verifMessagePasswordFunction(){
    if(!this.adresse){
      this.isPasswordValid = false;
      this.verifMessagePassword = "Le mot de passe est obligatoire"
    } else{
      this.isPasswordValid = true;
      this.verifMessagePassword = "";
    }
  }

  verifMessageSexeFunction(){
    if(!this.adresse){
      this.isSexeValid = false;
      this.verifMessageSexe = "Le mot de passe est obligatoire"
    } else{
      this.isSexeValid = true;
      this.verifMessageSexe = "";
    }
  }

  verifMessageLieudeNaissanceFunction(){
    if(!this.adresse){
      this.isLieuDeNaissanceValid = false;
      this.verifMessageLieuDeNaissance = "le Lieu de naissance est obligatoire"
    } else{
      this.isLieuDeNaissanceValid = true;
      this.verifMessageLieuDeNaissance = "";
    }
  }

  verifMessageDatedeNaissanceFunction(){
    if(!this.adresse){
      this.isDatedeNaissanceValid = false;
      this.verifMessageDatedeNaissance = "La date de naissance est obligatoire"
    } else{
      this.isDatedeNaissanceValid = true;
      this.verifMessageDatedeNaissance = "";
    }
  }

  profileForm: FormGroup = this.formbuilder.group({
    INE: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    telephone: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
    sexe: ['', Validators.required],
    statuts_id: ['', Validators.required],
    filiere: ['', Validators.required],
    adresse: ['', Validators.required],
    date_naissance:  ['', Validators.required],

  });

  seletedEtudiantCasSocial: any;

  ajouterEtudiant() {
    const etudiants = new EtudiantsModel();
    etudiants.nom = this.nom;
    etudiants.prenom = this.prenom;
    etudiants.niveau_etudes = this.niveau_etudes;
    etudiants.telephone = this.telephone;
    etudiants.sexe = this.sexe;
    etudiants.INE = this.INE;
    etudiants.date_naissance = this.date_naissance;
    etudiants.adresse = this.adresse

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.CassocialService.ajouterEtudiantCasSocial(this.profileForm.value).subscribe((response: any) => {

      console.log(response);
    });
    this.getAllEtudiantCasSocial();

  }
    getAllEtudiantCasSocial() {
      this.CassocialService.getAllEtudiantCasSocial().subscribe((reponse: any) => {
        // console.log('la reponse du baken est ',reponse)

          this.cassocials = reponse ;
          console.log(this.cassocials);

      });
    }



    getEtudiantcassocial(etudiant: any) {
      this.seletedEtudiantCasSocial = etudiant;
    }
}

