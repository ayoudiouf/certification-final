import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UserModel } from 'src/app/models/user_model';
import { UserService } from 'src/app/services/user.service';
// import { UserModel } from 'src/app/modeles/user_model';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  nom: any;
  prenom: any;
  email: any;
  password: any;
  telephone: any;
  status: any;

  tabUtilisateurs: any[] = [];

  nom_utilisateur: any = "";
  prenom_utilisateur: any = "";
  email_utilisateur: any = "";
  password_utilisateur: any = "";
  telephone_utilisateur: any = "";
  status_utilisateur: any = "";

  ngOnInit(): void {
    this.listeUtilisateurs();
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

    this.listeUtilisateurs();
  }
  constructor(private userService: UserService, private formbuilder: FormBuilder, private route: Router) {
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

  verifMessagenomFunction(){
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
      this.isprenomvalid = false;
      this.verifMessageisprenom = "Le prenom est obligatoire"
    } else{
      this.isprenomvalid = true;
      this.verifMessageisprenom = "";
    }
  }

  verifMessagetelephoneFunction(){
    if(!this.telephone){
      this.istelephoneValid = false;
      this.verifMessagetelephone = "Le Numéro telephone est obligatoire"
    } else{
      this.istelephoneValid = true;
      this.verifMessagetelephone = "";
    }

  }

  verifMessageemailFunction(){
    if (!this.email) {
      this.isemailvalid = false;
      this.verifMessageisemail = "L'email est obligatoire"
    } else {
      this.isemailvalid = true;
      this.verifMessageisemail = "";
    }
  }

  profileForm: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required,Validators.minLength(2)],
    prenom: ['', Validators.required,],
    email: ['', Validators.required,Validators.email],
    password: ['', Validators.required,],
    telephone: ['', Validators.required,],
    status: ['', Validators.required,],
  });

  profileFormEdit: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required,],
    prenom: ['', Validators.required,],
    email: ['', Validators.required,],
    password: ['', Validators.required,],
    telephone: ['', Validators.required,],
    status: ['', Validators.required,],
  });

  // fonction pour ajouter
  ajoutUtilisateur() {
    const utilisateur = new UserModel();
    utilisateur.nom = this.nom_utilisateur;
    utilisateur.prenom = this.prenom_utilisateur;
    utilisateur.email = this.email_utilisateur;
    utilisateur.password = this.password_utilisateur
    utilisateur.telephone = this.telephone_utilisateur
    utilisateur.status = this.status_utilisateur

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.userService.ajoutProfil(this.profileForm.value).subscribe((response) => {
      console.log(response);
    })
    this.listeUtilisateurs()
  }


  // Fonction pour lister les utilisateurs
  listeUtilisateurs() {
    this.userService.listeUtilisateur().subscribe(
      (reponse: any) => {
        // console.log(reponse);
        console.log(reponse.Utilisateurs);
        this.tabUtilisateurs = reponse.Utilisateurs;
        // let tab = reponse;
        // console.log(tab.length)

      },
      (err) => {
        console.log(err);
      }
    )
  }

  // methode pour charger element a modifier dans formulaire
  seletedUtilisateur: any = {};
  utilisateurChoisi: any
  chargerUtilisateur(use: UserModel) {
    this.utilisateurChoisi = use.id;
    this.nom = use.nom;
    this.prenom = use.prenom;
    this.email = use.email;
    this.password = use.password;
    this.telephone = use.telephone;
    this.status = use.status;
  }

  editUtilisateur() {

    const userChoisi = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      status: this.status,

    }
    this.userService.editUtilisateur(userChoisi, this.utilisateurChoisi).subscribe((res: any) => {
      console.log(res);
    });
    this.listeUtilisateurs();
  }

  getUtilisateur(utilisateur: any) {
    this.seletedUtilisateur = utilisateur;
  }

   // La méthode qui permet de changer l'état d'un Utilisateur
  changeEtat(id: number) {

    const utilisateur =  this.tabUtilisateurs.find((elt: any) => elt.id == id);

    console.log(utilisateur);

    const data = {
      status: utilisateur.status == "Actif" ? "Inactif" : "Actif"
    }
    this.userService.editUtilisateur(id, data).subscribe(
      (response) =>{
        console.log(response);

    this.listeUtilisateurs();


      }
    )
  }

}




