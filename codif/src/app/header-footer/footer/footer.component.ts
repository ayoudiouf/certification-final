import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const newsletterForm = document.getElementById('newsletterForm') as HTMLFormElement;

      newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Récupérer la valeur de l'e-mail
        const emailInput = document.getElementById('mail') as HTMLInputElement;
        const email = emailInput.value;

        // Vérifier si l'e-mail est valide
        if (!this.isValidEmail(email)) {
          const invalidFeedback = document.querySelector('.invalid-feedback') as HTMLElement;
          invalidFeedback.style.display = 'block';
        } else {
          // Envoyer l'e-mail à votre serveur ou effectuer d'autres actions
          alert(`Inscription à la newsletter réussie pour ${email}`);
        }
      });
    });
  }

  private isValidEmail(email: string): boolean {
    // Utilisez une expression régulière ou une logique plus avancée pour valider l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
    }
