
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

  email_utilisateur :string="";
  password_utilisateur: string="";
  email: string="";
  public truthyTab: any[] = [];

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
//   isEmailValid:boolean = false;
//   verifMessageEmail: string = "";

//   isPasswordValid:boolean = false;
//   verifMessagePassword: string = "";

//   validateEmail(email: string): boolean {
//     const emailRegex=/^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
//     return emailRegex.test(email);
//   }
//   verifEmailFunction(){
//     this.isEmailValid = this.validateEmail(this.emailUtilisateur);
//     if(!this.emailUtilisateur){
//       this.verifMessageEmail = "";
//     } else if(!this.isEmailValid){
//       this.verifMessageEmail = "Le format de l'email est incorrect";
//     } else{
//         this.verifMessageEmail = "";
//         this.isEmailValid = true;
//     }

//     if (!this.emailUtilisateur) {
//       this.verifMessageEmail = "";
//     }
//     if (!this.isEmailValid) {
//       this.verifMessageEmail = "Le format de l'email est incorrect";
//     }
//     if (this.emailUtilisateur || this.isEmailValid) {
//       this.verifMessageEmail = "";
//       this.isEmailValid = true;
//     }
// }

// verifPasswordFunction(){
//     if(!this.passwordUtilisateur){
//       this.isPasswordValid = false;
//       this.verifMessagePassword = "Le mot de passe est obligatoire";
//     }
//     if (this.passwordUtilisateur) {
//       this.verifMessagePassword = "";
//       this.isPasswordValid = true;
//     }

// }

emailValidate() {
  console.warn(this.email_utilisateur);
  let validationEmail = document.getElementById('validationEmail');
  const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
  // const emailRegexEnd = /^[a-z]{2,}$/;
  // this.emailError = emailRegexGegin.test(this.email);
  if (emailRegexGegin.test(this.email_utilisateur)) {
    // console.log(emailRegexGegin.test(this.email));
    validationEmail!.innerHTML = 'Valide';
    validationEmail!.classList.remove('error');
    validationEmail!.classList.add('success');
    if (this.truthyTab.find((value: any) => value.email_utilisateur == true) == undefined) {
      this.truthyTab.push({ email_utilisateur: true });
    }
    console.log(this.truthyTab);
  } else {
    // console.log(emailRegexGegin.test(this.email));
    validationEmail!.innerHTML = 'Invalide';
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

emailrefreshValidate() {
  console.warn(this.email);
  let validationEmail = document.getElementById('validationEmail');
  const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
  // const emailRegexEnd = /^[a-z]{2,}$/;
  // this.emailError = emailRegexGegin.test(this.email);
  if (emailRegexGegin.test(this.email_utilisateur)) {
    // console.log(emailRegexGegin.test(this.email));
    validationEmail!.innerHTML = 'Valide';
    validationEmail!.classList.remove('error');
    validationEmail!.classList.add('success');
    if (this.truthyTab.find((value: any) => value.email == true) == undefined) {
      this.truthyTab.push({ email_utilisateur: true });
    }
    console.log(this.truthyTab);
  } else {
    // console.log(emailRegexGegin.test(this.email));
    validationEmail!.innerHTML = 'Invalide';
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
passeValidate() {
  let validationPrenom = document.getElementById('validationPassword');
  const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9-@_&]{7,}$/;
  if (nomPrenomRegex.test(this.password_utilisateur)) {
    // console.log(nomPrenomRegex.test(this.pass));
    validationPrenom!.innerHTML = 'Valide';
    validationPrenom!.classList.remove('error');
    validationPrenom!.classList.add('success');
    if (this.truthyTab.find((value:any)=>value.password_utilisateur==true)==undefined) {
      this.truthyTab.push({password_utilisateur:true});
    }

  } else {
    // console.log(nomPrenomRegex.test(this.pass));
    validationPrenom!.innerHTML = 'Invalide';
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


  login(){
    // this.emailValidate();
    // this.passeValidate();
    let emailUser= this.email_utilisateur;
    let passwordUser =this.password_utilisateur;


    if (this.truthyTab.length>=2){
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
          }else if(response.Results.Utilisateur.roles_id==5){
            this.route.navigate(['/dahresponsable'])
          }

        },
        (err:any) =>{
          // this.verifMessageEmail = this.verifMessagePassword = "Email ou mot de passe incorrect"
        }
      )
    }
    // this.userservice.login(user,)
  }
  me(){

  }

  // Envoyeremail(id:any){
  //   this.userservice.Envoyeremail(id).subscribe(
  //     (respons) => {
  //       console.log("est envoyé oui!!!!", respons);
  //       // Afficher une alerte SweetAlert pour indiquer que l'étudiant a été validé avec succès
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Email Envoyé!',
  //         text: 'L\'étudiant a été validé avec succès.',
  //       });
  //     },
  //     (error) => {
  //       console.error("Une erreur s'est produite lors de la validation de l'étudiant", error);
  //       // Afficher une alerte SweetAlert pour indiquer qu'une erreur s'est produite
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Erreur',
  //         // text: 'Une erreur s\'est produite lors de la validation de l\'étudiant. Veuillez réessayer plus tard.',
  //         text: 'Désolé l\'étudiant a été déjà valider. Veuillez réessayer plus tard.',
  //       });
  //     }
  //   );
  // }

  Envoyeremail(email_utilisateur: string): void {
    this.userservice.Envoyeremail(email_utilisateur).subscribe(
      (respons) => {
        console.log("Email envoyé avec succès!", respons);
       
        Swal.fire({
          icon: 'success',
          title: 'Email Envoyé!',
          text: 'Un e-mail de récupération de mot de passe a été envoyé à votre adresse e-mail.',
        });
      },
      (error) => {
        console.error("Une erreur s'est produite lors de l'envoi de l'e-mail de récupération", error);

        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail de récupération. Veuillez réessayer plus tard.',
        });
      }
    );
  }

}
