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

Envoyeremail(id:any){

  return this.http.post(`${url_base}refresh`,id)

}

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

}

