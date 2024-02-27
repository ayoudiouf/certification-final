import { Component, OnInit, Renderer2 } from '@angular/core';
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
  nom: any = "";
  prenom: any = "";
  email: any = "";
  password: any = "";
  telephone: any = "";
  status: any = "";
  roles_id: any = "";

  tabUtilisateurs: any[] = [];

  nom_utilisateur: any = "";
  prenom_utilisateur: any = "";
  email_utilisateur: any = "";
  password_utilisateur: any = "";
  telephone_utilisateur: any = "";
  status_utilisateur: any = "";
  roles_id_utilisateur: any = "";
  // tab for validations
  public truthyTab: any[] = [];

  dataRole: any[] = [];
  ngOnInit(): void {
    this.listeUtilisateurs();
    this.getAllnomRoleUtilisateur();
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
    // etatCouleur: string;
  }
  constructor(private userService: UserService, private formbuilder: FormBuilder, private route: Router, private renderer: Renderer2) {
  }


  profileForm: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required, Validators.minLength(2)],
    prenom: ['', Validators.required,],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required,],
    telephone: ['', Validators.required,],
    status: ['', Validators.required,],
    roles_id: ['', Validators.required,],
  });

  profileFormEdit: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required,],
    prenom: ['', Validators.required,],
    email: ['', Validators.required,],
    password: ['', Validators.required,],
    telephone: ['', Validators.required,],
    status: ['', Validators.required,],
    roles_id: ['', Validators.required,],
  });

  // fonction pour ajouter
  ajoutUtilisateur() {
    // const utilisateur = new UserModel();
    // utilisateur.nom = this.nom_utilisateur;
    // utilisateur.prenom = this.prenom_utilisateur;
    // utilisateur.email = this.email_utilisateur;
    // utilisateur.password = this.password_utilisateur
    // utilisateur.telephone = this.telephone_utilisateur
    // utilisateur.status = this.status_utilisateur

    let donne = {
      nom: this.nom_utilisateur,
      prenom: this.prenom_utilisateur,
      email: this.email_utilisateur,
      password: this.password_utilisateur,
      telephone: this.telephone_utilisateur,
      status: this.status_utilisateur,
      // roles_id: this.roles_id_utilsateur,
    }

    console.log(donne);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.userService.ajoutProfil(donne).subscribe((response) => {
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


  getAllnomRoleUtilisateur(){
    this.userService.getAllnomRoleUtilisateur().subscribe((reponse: any) => {
      this.dataRole = reponse.roles
        console.log("rollllllll",this.dataRole);
        // console.log(reponse.nomRole); this.tabRole = reponse.nomRole;
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
    // this.roles_id = use.roles_id;
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
  // changeEtat(id: number) {

  //   const utilisateur = this.tabUtilisateurs.find((elt: any) => elt.id == id);

  //   console.log(utilisateur);

  //   const data = {
  //     status: utilisateur.status == "Actif" ? "Inactif" : "Actif"
  //   }
  //   this.userService.editUtilisateur(id, data).subscribe(
  //     (response) => {
  //       console.log(response);

  //       this.listeUtilisateurs();


  //     }
  //   )
  // }

  // changeEtat(id: number) {
  //   const utilisateur = this.tabUtilisateurs.find((elt: any) => elt.id === id);

  //   const newStatus = utilisateur.status === "Actif" ? "Inactif" : "Actif";

  //   const data = {
  //     status: newStatus
  //   };

  //   this.userService.editUtilisateur(id, data).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.listeUtilisateurs();
  //     }
  //   );

  //   Ajouter ou supprimer des classes CSS en fonction du nouvel état
  //   const iconElement = document.getElementById(`icon-${id}`);
  //   if (iconElement) {
  //     iconElement.classList.remove("active", "inactive");
  //     iconElement.classList.add(newStatus.toLowerCase());
  //   }
  // }


  changeEtat(id: number) {
    const utilisateur = this.tabUtilisateurs.find((elt: any) => elt.id === id);

    const newStatus = utilisateur.status === "Actif" ? "Inactif" : "Actif";

    const data = {
        status: newStatus
    };

    this.userService.editUtilisateur(id, data).subscribe(
        (response) => {
            console.log(response);
            this.listeUtilisateurs();
            // Appel de la méthode pour mettre à jour la classe CSS de l'icône
            this.updateIconClass(id, newStatus);
        }
    );
}

updateIconClass(id: number, newStatus: string) {
    const iconElement = document.getElementById(`icon-${id}`);
    if (iconElement) {
        // Supprimer toutes les classes existantes
        iconElement.classList.remove("actif", "inactif");
        // Ajouter la classe correspondante au nouvel état
        iconElement.classList.add(newStatus.toLowerCase());
    }
}

  // validations

  emailValidate() {
    console.warn(this.email_utilisateur);
    let validationEmail = document.getElementById('validationEmail');
    const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
    // const emailRegexEnd = /^[a-z]{2,}$/;
    // this.emailError = emailRegexGegin.test(this.email);
    if (emailRegexGegin.test(this.email_utilisateur)) {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'valide';
      validationEmail!.classList.remove('error');
      validationEmail!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.email_utilisateur == true) == undefined) {
        this.truthyTab.push({ email_utilisateur: true });
      }
      console.log(this.truthyTab);
    } else {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'invalide';
      validationEmail!.classList.remove('success');
      validationEmail!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.email_utilisateur == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.email_utilisateur == true), 1);
      }

    }
    if (this.email_utilisateur == "") {
      validationEmail!.innerHTML = "";
    }
    // console.log(this.truthyTab);
  }

  nomValidate() {
    let validationNom = document.getElementById('validationNom');

    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.nom_utilisateur)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.nom_utilisateur == true) == undefined) {
        this.truthyTab.push({ nom_utilisateur: true });
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.nom_utilisateur == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.nom_utilisateur == true), 1);
      }
    }
    if (this.nom_utilisateur == "") {
      validationNom!.innerHTML = "";
    }
  }
  prenomValidate() {
    let validationPrenom = document.getElementById('validationPrenom');
    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.prenom_utilisateur)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.prenom_utilisateur == true) == undefined) {
        this.truthyTab.push({ prenom_utilisateur: true });
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.prenom_utilisateur == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.prenom_utilisateur == true), 1);
      }
    }
    if (this.prenom_utilisateur == "") {
      validationPrenom!.innerHTML = "";
    }
  }

  telephoneValidate() {
    let validationPrenom = document.getElementById('validationTelephone');
    const nomPrenomRegex = /^(77|76|75|78|33)[0-9]{7}$/;
    if (nomPrenomRegex.test(this.telephone_utilisateur)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.telephone_utilisateur==true)==undefined) {
        this.truthyTab.push({telephone_utilisateur:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.telephone_utilisateur==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.telephone_utilisateur==true),1);
      }
    }
    if (this.telephone_utilisateur=="") {
      validationPrenom!.innerHTML="";
    }
  }


  passeValidate() {
    let validationPrenom = document.getElementById('validationPassword');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9-@_&]{7,}$/;
    if (nomPrenomRegex.test(this.password_utilisateur)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.password_utilisateur==true)==undefined) {
        this.truthyTab.push({password_utilisateur:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.password_utilisateur==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.password_utilisateur==true),1);
      }
    }
    if (this.password_utilisateur=="") {
      validationPrenom!.innerHTML="";
    }
    // console.log(this.truthyTab);
    // console.log(this.truthyTab.length);
  }
}




