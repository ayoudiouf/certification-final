import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChambresService {
  ChambreService(value: any) {
    throw new Error('Method not implemented.');
  }

  postchambre(chambre: any) {
    return this.http.post(`${url_base}admin/chambre/create` ,chambre);

  }

  getAllChambre() {
    return this.http.get(`${url_base}admin/chambres`);
  }
  getAllChambreChefPavillon() {
    return this.http.get(`${url_base}chambres`);
  }

  putChambre(chambre:any) {
    return this.http.put(`${url_base}chambre/update`,chambre);
  }

  putChambreAdmin( idchambre: any, chambre:any ) {
    return this.http.put(`${url_base}admin/chambre/update/${idchambre}`,chambre);
  }


  deleteChambre(id: any) {
    return this.http.delete(`${url_base}admin/chambre/delete/{id}`,id)

  }

  constructor(private http : HttpClient) { }


}
// admin/chambre/update/{id}

