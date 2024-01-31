import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UserModel } from '../models/user_model';
import {  url_base } from './api_url_service';
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
 login(user: any, onSuccess: Function) {
  return this.http
    .post(`${url_base}auth/login`, user)
    .subscribe((reponse: any) => onSuccess(reponse));
}
ajoutProfil(utilisateur:any){

  return this.http
  .post(`${url_base}ajoutProfil`,utilisateur)

}

// La liste des utilisateurs
listeUtilisateur(){
  return this.http
  .get(`${url_base}Utilisateurs`);
}
}
