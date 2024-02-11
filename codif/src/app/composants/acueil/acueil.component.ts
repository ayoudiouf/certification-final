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

