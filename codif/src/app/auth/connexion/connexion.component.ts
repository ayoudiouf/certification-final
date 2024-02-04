
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

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

  });
  //   profileForm = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  //   });
  // connexion() {
  //   this.userservice.login(this.profileForm.value).subscribe(
  //     (connect: any) => {
  //       console.log(connect.access_token, 'tokken');

  //       if (connect.access_token) {
  //         const u = this.userservice.userConected();
  //         console.log(u, 'user');

  //       }
  //     })
  // }

  login(){
    let emailUser= this.emailUtilisateur;
    let passwordUser =this.passwordUtilisateur;
    if(emailUser =="" || passwordUser==""){
      console.log("veuillez remplir les champs");
    }else{
      // console.log("votre mail est :",emailUser, "et votre password est :",passwordUser);
      this.userservice.login({email:emailUser,password:passwordUser},(response:any)=>{
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

      }

      )
    }
    // this.userservice.login(user,)
  }
  me(){

  }
}
