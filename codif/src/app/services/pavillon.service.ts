import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class PavillonService {
  
  constructor(private http : HttpClient) { }

  

pavillon(pav:any){

  return this.http
  .post(`${url_base}pavillon`,pav)

}
// La liste des pavillon
listepavillon(){
  return this.http
  .get(`${url_base}pavillon`);
}
}
