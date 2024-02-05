import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CassocialService {

  EtudiantCasSocialService(id: any) {
    throw new Error('Method not implemented.');
  }

  // La liste des EtudiantCasSocial
  getAllEtudiantCasSocial() {
    return this.http.get(`${url_base}listesEtudiantsCasSocial`);
  }



  constructor(private http : HttpClient) { }
userConnect(pav:any){

  return this.http.post(`${url_base}ajoutEtudiant/CasSocial`,pav);

}

// listesEtudiantsCasSocial
  // listeCasSocial(){

  // }


//  Methode qui permet de voir les datail
datailEtudiantCasSocial() {
  return this.http.get(`${url_base}detailEtudiant/CasSocial/{id}`);
}
}
