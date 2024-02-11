import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css']
})
export class HeaderSidebarComponent {

  constructor(private router:Router,private userService:UserService, private http : HttpClient){

  }


  logout(){
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
          (response) => {
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



