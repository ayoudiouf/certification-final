import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class ListeEtudiantParOrdreMeriteService {

  constructor(private http : HttpClient) { }

  // La liste des Etudiants par Ordre de erite
  getAllEtudiantParMerite(){
    return this.http.get(`${url_base}listesEtudiantsMerites`);

  }

  getAllEtudiantParMeriteadmin(){
    return this.http.get(`${url_base}admin/listesEtudiantsMerites`);

  }



  // Url qui permet de valider un etudiant
  validerEtudiant(id: any){
    return this.http.put(`${url_base}ValiderEtudiant/update/${id}`, {});

  }

// Ajout Etudiant
  etudiants(etudiantsparmerites:any){

    return this.http.post("http://127.0.0.1:8000/api/ajoutEtudiant/Merite",etudiantsparmerites);

  }
  //  La Ajouter des Etudiants par Ordre de erite
   AjouterEtudiantParMerite(etu:any){
    return this.http.post(`${url_base}ajoutEtudiant/Merite`, etu,);}


   //  La Ajouter des Etudiants par Ordre de erite
   AjouterEtudiantchefPedagogique(etu:any){
    return this.http.post(`${url_base}ajoutEtudiant/Merite `,etu);

  }
  // Detail des Etudiants par Ordre de erite
  GetEtudiantParMerite(){
    return this.http.get(`${url_base}detailEtudiant/Merite/1`);

  }
}


