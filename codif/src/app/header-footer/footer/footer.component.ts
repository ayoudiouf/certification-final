import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {
  }
  email: string = '';
  onSubmit() {
    if (this.isValidEmail(this.email)) {
      Swal.fire({
        title: 'Etes sur sûr?',
        text: 'Vous allez envoyer votre email!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: ' Oui envoyer!',
        cancelButtonText: 'Non,Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          // Code à exécuter lorsque l'utilisateur clique sur "Yes, delete it!"
          Swal.fire(
            'Bravo!',
            'Envoie réussi avec succés".',
            'success'
          );
          // Vous pouvez également soumettre le formulaire ici si nécessaire
          // this.newsletterForm.submit();
        } else if (result.isDismissed && result) {

          // Code à exécuter lorsque l'utilisateur clique sur "No, keep it"
          Swal.fire(
            'Bravo!',
            'Votre envoie a été annuler avec succés".',
            'success'
          );
        }
      });
    } else {
      Swal.fire({
        title: 'Email Invalid',
        text: 'Veillez entrer votre email.',
        icon: 'error',
      });
    }
  }

  isValidEmail(email: string): boolean {
    // Logique de validation d'e-mail basique avec une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
    }
