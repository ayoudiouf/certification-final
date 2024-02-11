import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class PavillonService {
  PavillonService(id: any) {

  }
  getAllPavillon() {

  }

  constructor(private http : HttpClient) { }


userConnect(pav:any){

  return this.http.post("http://127.0.0.1:8000/api/pavillon/create",pav);

}
// La liste des pavillon
  listepavillon(){
    return this.http.get(`${url_base}pavillons`);

  }

   // methode pour modifier donnée ves l'api
   editPavillon( modifpav:any, idPavion: any){
    return this.http.put(`${url_base}pavillon/update/
     ${idPavion}`,modifpav)
  }

   // methode pour supprimer les pavillon
   deletePavillon(id: any) {
    return this.http.delete(`${url_base}pavillon/delete/${id}`)

  }

  // methode pour aficher les detail

  voidetail() {
    return this.http.delete(`${url_base}pavillon/read/{id}`)

  }


}
