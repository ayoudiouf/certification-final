
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  emailUtilisateur :string="";
  passwordUtilisateur: string="";


  ngOnInit(): void {

  }

  constructor(private userservice: UserService, private formbuilder: FormBuilder,private route:Router) {

  }
  profileForm: FormGroup = this.formbuilder.group({
    email: ['', Validators.required,],
    password: ['', Validators.required,],
    // email: ['', [Validators.required, Validators.email]],
    // password: ['',  [Validators.required, Validators.minLength(6)]],
    // password: ['', [Validators.required, Validators.minLength(6)]]

  });

  // Les variables de la vérification
  isEmailValid:boolean = false;
  verifMessageEmail: string = "";

  isPasswordValid:boolean = false;
  verifMessagePassword: string = "";

  validateEmail(email: string): boolean {
    const emailRegex=/^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
verifEmailFunction(){
    this.isEmailValid = this.validateEmail(this.emailUtilisateur);
    if(!this.emailUtilisateur){
      this.verifMessageEmail = "L'email est obligatoire"
    }else if(!this.isEmailValid){
      this.verifMessageEmail = "Le format de l'email est incorrect";
    } else{
        this.verifMessageEmail = "";
        this.isEmailValid = true;
      }
  }

  verifPasswordFunction(){
    if(!this.passwordUtilisateur){
      this.isPasswordValid = false;
      this.verifMessagePassword = "Le mot de passe est obligatoire"
    } else{
      this.isPasswordValid = true;
      this.verifMessagePassword = "";
    }
  }
  login(){
    this.verifEmailFunction();
    this.verifPasswordFunction();
    let emailUser= this.emailUtilisateur;
    let passwordUser =this.passwordUtilisateur;
    // if(emailUser =="" || passwordUser==""){
    //   // console.log("veuillez remplir les champs");
    //   Swal.fire({
    //     title: 'Champs requis',
    //     text: 'Veuillez remplir tous les champs obligatoires.',
    //     icon: 'error',
    //   });
    //   return;


    // Swal.fire({
    //   confirmButtonText: 'Oui, envoyer!',
    //   cancelButtonText: 'Non, annuler'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Bravo!',
    //       'Envoi réussi avec succès.',
    //       'success'
    //     );
    //   } else {
    //     Swal.fire(
    //       'Annulé!',
    //       'Votre envoi a été annulé avec succès.',
    //       'info'
    //     );
    //   }
    // });
    // // }
    //   title: 'Êtes-vous sûr?',
    //   text: 'Vous allez envoyer votre email!',
    //   icon: 'warning',
    //   showCancelButton: true,

    if (this.isEmailValid && this.isPasswordValid){
      // console.log("votre mail est :",emailUser, "et votre password est :",passwordUser);
      this.userservice.login({email:emailUser,password:passwordUser},
        (response:any)=>{
        // console.log(response.Results.Utilisateur.roles_id);
        // stocker notre les info de la requete dans notre localstorage
        // console.log(response.Results.access_token);
          console.log(response.Results.access_token);


          localStorage.setItem('userOnline', JSON.stringify(response));
          // console.log(response);


          //recuperer le userConnecter
          const userOnline = JSON.parse(
            localStorage.getItem('userOnline') || ''
          );
          if(response.Results.Utilisateur.roles_id==1){
            this.route.navigate(['/admin'])
          }else if(response.Results.Utilisateur.roles_id==2){
            this.route.navigate(['/chefpavion'])
          }else if(response.Results.Utilisateur.roles_id==3){
            this.route.navigate(['/chefpedagogique'])
          }else if(response.Results.Utilisateur.roles_id==4){
            this.route.navigate(['/etudiant'])
          }

        },
        (err:any) =>{
          this.verifMessageEmail = this.verifMessagePassword = "Email ou mot de passe incorrect"
        }
      )
    }
    // this.userservice.login(user,)
  }
  me(){

  }
}
