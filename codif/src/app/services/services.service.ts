import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  constructor(private http : HttpClient) { }
  // La liste des Role
  AjouterRole(role:any){
    return this.http.post(`${url_base}AjouterRole`,role);


  }
  getAllnomRole(){

    return this.http.get(`${url_base}listesRoles`);

  }
}
