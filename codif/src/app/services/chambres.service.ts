import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { chambresModel } from '../models/chambres';

@Injectable({
  providedIn: 'root'
})
export class ChambresService {
  ChambreService(value: any) {
    throw new Error('Method not implemented.');
  }
  // listerDesReclamations
// Url qui ajoute les chambre
  postchambre(chambre: any) {
    return this.http.post(`${url_base}admin/chambre/create/${1}` ,chambre);

  }
  // La liste des pavillon
  listepavillon(){
    return this.http.get(`${url_base}pavillons`);

  }

  postchambreChefPavillon(chambre: any) {
    return this.http.post(`${url_base}chambre/create` ,chambre);

  }
// Url qui liste les chambre
  getAllChambre() {
    return this.http.get(`${url_base}admin/chambres`);
  }

  getAllChambreChefPavillon() {
    return this.http.get(`${url_base}chambres`);
  }
// Url qui Modifie les chambr
  putChambre(chambre:any) {
    return this.http.put(`${url_base}chambre/update`,chambre);
  }

  putChambreAdmin( id: any , chambre : any) {
    return this.http.put(`${url_base}admin/chambre/update/${id}`, chambre);
  }


  deleteChambre(id: any) {
    return this.http.delete(`${url_base}admin/chambre/delete/${id}`)

  }

  constructor(private http : HttpClient) { }


}
// admin/chambre/update/{id}

