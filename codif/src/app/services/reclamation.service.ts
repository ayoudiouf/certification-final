import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_base } from './api_url_service';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {


  constructor(private http : HttpClient) { }



  // La liste des Rclamation
  getAllReclamation(){
    return this.http.get(`${url_base}listerDesReclamations`);

  }

   // Supprimer une reclamaton
   deleteReclamation(){
    return this.http.delete(`${url_base}SupprimerReclamation/delete/{id}`);

  }

   // Detail d'une reclamaton
   getReclamation(){
    return this.http.get(`${url_base}detailReclamation/read/{id}`);

  }



}
