import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class PavillonService {
  getAllPavillon() {
   
  }
  
  constructor(private http : HttpClient) { }

  // userConected(){
  //   return this.http.get('http://127.0.0.1:8000/api/pavillon/crate')
  //  }

userConnect(pav:any){

  return this.http.post("http://127.0.0.1:8000/api/pavillon/create",pav);

}
// La liste des pavillon
listepavillon(){
  return this.http.get(`${url_base}pavillons`);
  
}
// Detail des pavillon
detailspavillon(){
  return this.http.get(`${url_base}pavillon/read/1`);
  
}
}
