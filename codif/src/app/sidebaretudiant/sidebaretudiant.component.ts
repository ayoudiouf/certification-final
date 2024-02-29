import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebaretudiant',
  templateUrl: './sidebaretudiant.component.html',
  styleUrls: ['./sidebaretudiant.component.css']
})
export class SidebaretudiantComponent implements OnInit {

  userConnected: any;
  constructor(private userService: UserService, private router: Router) {

    ;
  }
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userOnline') || "")
    this.userConnected = user.Results.Utilisateur;

  }

  logout() {
    let admin = {
      email: "admin@gmail.com",
      password: "admin123@"
    };

    Swal.fire({
      title: "Êtes-vous sûr de vouloir vous déconnecter ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA7436",
      cancelButtonColor: "#FA0436",
      confirmButtonText: "Oui, me déconnecter"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout(admin).subscribe(
          (response: any) => {
            console.log(response);
            localStorage.removeItem('userOnline');
            console.log(response);
            this.router.navigate(['/acueil']);
          })
        Swal.fire({
          title: "Déconnexion!",
          text: "Vous vous etes déconnecté avec succés",
          icon: "success"
        });
      }
    });

  }
}
