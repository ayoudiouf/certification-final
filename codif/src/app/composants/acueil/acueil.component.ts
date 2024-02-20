import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acueil',
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.css']
})
export class AcueilComponent implements OnInit{
  email: any;
  prenom: any;
  nom: any;
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.nom || !this.prenom || !this.email) {
      Swal.fire({
        title: 'Champs requis',
        text: 'Veuillez remplir tous les champs obligatoires.',
        icon: 'error',
      });
      return;
    }

      // Les variables de la vérification
//   isEmailValid:boolean = false;
//   verifMessageEmail: string = "";

//   isPasswordValid:boolean = false;
//   verifMessagePassword: string = "";

//   validateEmail(email: string): boolean {
//     const emailRegex=/^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
//     return emailRegex.test(email);
//   }
// verifEmailFunction(){
//     this.isEmailValid = this.validateEmail(this.emailUtilisateur);
//     if(!this.emailUtilisateur){
//       this.verifMessageEmail = "L'email est obligatoire"
//     }else if(!this.isEmailValid){
//       this.verifMessageEmail = "Le format de l'email est incorrect";
//     } else{
//         this.verifMessageEmail = "";
//         this.isEmailValid = true;
//       }
//   }



//   verifPrenomFunction(){
//     if(!this.prenomUtilisateur){
//       this.isPrenomValid = false;
//       this.verifMessagePrenom = "Le mot de passe est obligatoire"
//     } else{
//       this.isPrenomValid = true;
//       this.verifMessagePrenom = "";
//     }
//   }

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous allez envoyer votre email!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, envoyer!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Bravo!',
          'Envoi réussi avec succès.',
          'success'
        );
      } else {
        Swal.fire(
          'Annulé!',
          'Votre envoi a été annulé avec succès.',
          'info'
        );
      }
    });
  }

}

