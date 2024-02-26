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
    return this.http.get(`${url_base}admin/listesEtudiantsCasSocial`);
  }

  getdelegueAllEtudiantCasSocial() {
    return this.http.get(`${url_base}delegues/listesEtudiantsCasSocial`);
  }

  constructor(private http : HttpClient) { }
  ajouterEtudiantCasSocial(pav:any){

  return this.http.post(`${url_base}ajoutEtudiant/CasSocial`,pav);

}

validerEtudiant(id: any){
  return this.http.put(`${url_base}ValiderEtudiant/update/${id}`, {});

}

// ajoutEtudiant/CasSocial/{chambre}


//  Methode qui permet de voir les datail
datailEtudiantCasSocial() {
  return this.http.get(`${url_base}detailEtudiant/CasSocial/{id}`);
}
}
