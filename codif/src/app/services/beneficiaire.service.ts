import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

  constructor(private http : HttpClient) { }
  // La liste des Beneficiaire

  getAllBeneficiaire(){

    return this.http.get(`${url_base}admin/Beneficiaires`);

  }
}

