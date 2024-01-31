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
  telephone: any;
  roles_id: any;

  tabUtilisateurs: any[] = [];



  nom_utilisateur: any = "";
  prenom_utilisateur: any = "";
  email_utilisateur: any = "";
  password_utilisateur: any = "";
  telephone_utilisateur: any = "";
  roles_id_utilisateur: any = "";



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

    this.listeUtilisateurs();
  }
  constructor(private userService: UserService, private formbuilder: FormBuilder, private route: Router) {

  }
  profileForm: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required,],
    prenom: ['', Validators.required,],
    email: ['', Validators.required,],
    password: ['testestest', Validators.required,],
    telephone: ['', Validators.required,],
    roles_id: ['', Validators.required,],
    // roles: ['', Validators.required,],


  });
  // fonction pour ajouter
  ajoutUtilisateur() {
    const utilisateur = new UserModel();
    utilisateur.nom = this.nom_utilisateur;
    utilisateur.prenom = this.prenom_utilisateur;
    utilisateur.email = this.email_utilisateur;
    utilisateur.password = this.password_utilisateur
    utilisateur.telephone = this.telephone_utilisateur
    utilisateur.roles_id = this.roles_id_utilisateur

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.userService.ajoutProfil(this.profileForm.value).subscribe((response) => {

      console.log(response);

    })

  }


  // Fonction pour lister les utilisateurs
  listeUtilisateurs(){
    this.userService.listeUtilisateur().subscribe(
      (reponse:any) =>{
        // console.log(reponse);
        console.log(reponse.Utilisateurs);
        this.tabUtilisateurs =  reponse.Utilisateurs;
        // let tab = reponse;
        // console.log(tab.length)

      },
      (err) =>{
        console.log(err);
      }
    )
  }

}

// fonction pour lister
// getAllUtilisateur() {

//   this.Utilisateur.getAllUtilisateur().subscribe(
//     (data) => {
//       this.Utilisateur = data.utilisateur;
//       // console.log(this.listeUtilisateur);
//     }
//   );
// }



