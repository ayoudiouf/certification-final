import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { UserModel } from '../models/user_model';
import {  url_base } from './api_url_service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

//  login(body:any){
//   return this.http.post('http://127.0.0.1:8000/api/auth/login', body)
//  }

 userConected(){
  return this.http.get('http://127.0.0.1:8000/api/auth/me')
 }
 login(user: any, onSuccess: Function, onError: Function) {
  return this.http
    .post(`${url_base}auth/login`, user)
    .subscribe((reponse: any) => onSuccess(reponse), (err:any) => onError(err));
}
ajoutProfil(utilisateur:any){

  return this.http.post(`${url_base}AjouterUtilisateur`,utilisateur)

}

// Envoyeremail(id:any){

//   return this.http.post(`${url_base}refresh`,id)

// }


// Methode pour rafraichir automatiquement le token après chaque 15mns
// deconnexionAutomatique() {
//   console.log('deconnection automatique demarer')
//   setTimeout(() => {
//     this.refreshToken(this.onSuccess, this.onError);
//   }, 60000); // 10 secondes

// }

// // Service pour rafraichir le token
// refreshToken(onSuccess: Function, onError: Function) {
//   console.log("Function de rafraichessement");

//   // Vérifier si le nombre de rafraîchissements a atteint la limite de 4
//   const refreshCount = parseInt(localStorage.getItem('refreshCount') || '0');
//   if (refreshCount >= 8) {
//     // Afficher SweetAlert pour proposer de rafraîchir le token ou se déconnecter
//     this.showLogoutAlert();
//     console.log("Function de rafraichessement superieure à 1", refreshCount);
//   } else {
//     // Mettre à jour le nombre de rafraîchissements dans le localStorage
//     localStorage.setItem('refreshCount', (refreshCount + 1).toString());
//     console.log("Function de rafraichessement inf à 1", refreshCount)
//     // Réinitialiser le timer de déconnexion automatique
//     this.deconnexionAutomatique();
//   }

//   // Effectuer le rafraîchissement du token
//   return this.http.get<any>(`${url_base}refresh`).subscribe(
//     (response: any) => onSuccess(response),
//     (error: any) => onError(error)
//   );
// }
// onSuccess = (response: any) => {
//   // Mettre à jour le token
//   let userOnline= JSON.parse (localStorage.getItem("userOnline.access_token") || "");
//   if(userOnline.access_token){
//     console.log(response);
//     // userOnline.access_token = response.access_token;

//     // localStorage.setItem('userOnline', JSON.stringify(userOnline));
//     console.log('voici la reponse du changement du token', response.token);

//   }
// };

// showLogoutAlert() {
//   let refresh = 0;
//   localStorage.setItem('refreshCount', JSON.stringify(refresh));
//   // this.logout();
//   // sweetAlertMessage("success", "Session expirée", "Veuillez vous reconnectez")

//   // this.MessageSucces()
//   // Swal.fire({
//   //   title: 'Votre Session a expirer',
//   //   text: 'Deconnecter vous ou rafraichissez votre token',
//   //   icon: 'warning',
//   //   showCancelButton: true,
//   //   confirmButtonColor: '#3085d6',
//   //   cancelButtonColor: '#d33',
//   //   confirmButtonText: 'Oui! je raffraichie',
//   // }).then((result) => {
//   //   if (result.isConfirmed) {
//   //     Swal.fire({
//   //       title: 'non!',
//   //       text: 'non!, je me deconnecte',
//   //       icon: 'success',
//   //     });
//   //   }
//   // });
// }

// onError = (error: any) => {
//   console.log('Voici les erreurs du changement du token', error);
// };


// La liste des utilisateurs
listeUtilisateur(){
  return this.http.get(`${url_base}Utilisateurs`);
}
getAllnomRoleUtilisateur(){
  return this.http.get(`${url_base}listesRoles`);
}
  // methode pour modifier donnée ves l'api
  editUtilisateur( id:any, modifuser: any){
    return this.http
.put(`${url_base}modifierProfil/${id}`,modifuser)

  }


 // déconnexion utilisateur
 logout(users: any): Observable<any> {
  return this.http.post<any>(`${url_base}auth/logout`, users);
}


getToken(): string | null {
  return localStorage.getItem('userOnline');
}

// Is connected pour vérifier s'il est toujours connecté
isLoggedIn(): boolean {
  if (localStorage.getItem('userOnline')==null || localStorage.getItem('userOnline')==undefined) {
    return false;

  }else{

    return true ;
  }
  // return this.getToken() !== null;
}

// motdepassValidate(){
//   return this.http.post(`${url_base}forget-password`)
// }
motdepassValidate(email: string) {
  // Créez un objet contenant l'e-mail à envoyer
  const data = { email: email };

  // Effectuez la requête HTTP POST avec l'e-mail en tant que corps de la requête
  return this.http.post(`${url_base}forget-password`, data);
}


}

