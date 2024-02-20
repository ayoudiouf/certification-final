import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_base } from './api_url_service';
import { Observable } from 'rxjs';
import { ReclamationModel } from '../models/reclamation';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {


  constructor(private http : HttpClient) { }



  // La liste des Rclamation
  getAllReclamation(){
    return this.http.get(`${url_base}listerDesReclamations`);

  }

    // La liste des Rclamation chefpavillon
    getAllReclamationetudiant():Observable<any>{
      return this.http.get<any>(`${url_base}historiquesReclamations`);

    }

  //  Supprimer une reclamaton
   deleteReclamation(){
    return this.http.delete(`${url_base}SupprimerReclamation/delete/{id}`);

  }



   // Detail d'une reclamaton
   getReclamation(){
    return this.http.get(`${url_base}detailReclamation/read/{id}`);

  }
   // Detail d'une reclamaton
   getDemandeReclamation(){
    return this.http.get(`${url_base}detailReclamation/read/{id}`);

  }

   // Faire d'une reclamaton
   FaireReclamation(reclamation : ReclamationModel){
    return this.http.post(`${url_base}faireReclamations`, reclamation);

  }

   // Faire d'une reclamaton

  editReclamation( id:any, modifuser: any){
    return this.http
.put(`${url_base}traiterReclamation/${id}`,modifuser)

  }


   // methode pour supprimer les Reclamation chef Pavillon
   deleteReclamationChefPavillon(id: any) {
    return this.http.delete(`${url_base}chefpavillon/SupprimerReclamation/delete/${id}`)

  }


   // methode pour supprimer les Reclamation chef Etudiant
   deleteReclamationChefEtudiant(id: any) {
    return this.http.delete(`${url_base}SupprimerReclamation/delete/${id}`)

  }

}

