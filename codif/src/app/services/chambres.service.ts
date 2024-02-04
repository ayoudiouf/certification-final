import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';
import { HttpClient } from '@angular/common/http';

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

  putChambreAdmin(chambre:any) {
    return this.http.put(`${url_base} admin/chambre/update`,chambre);
  }

  constructor(private http : HttpClient) { }


}
