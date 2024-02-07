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

// Ajout Etudiant
  etudiants(etudiantsparmerites:any){

    return this.http.post("http://127.0.0.1:8000/api/ajoutEtudiant/Merite",etudiantsparmerites);

  }

   // La Ajouter des Etudiants par Ordre de erite
  //  AjouterEtudiantParMerite(){
  //   return this.http.get(`${url_base}ajoutEtudiant/Merite`);

  // }

  // Detail des Etudiants par Ordre de erite
  GetEtudiantParMerite(){
    return this.http.get(`${url_base}detailEtudiant/Merite/1`);

  }
}

