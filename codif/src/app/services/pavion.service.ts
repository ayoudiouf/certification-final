import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_base } from './api_url_service';

@Injectable({
  providedIn: 'root'
})
export class PavillonService {
  PavillonService(id: any) {
    throw new Error('Method not implemented.');
  }
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

   // methode pour modifier donnée ves l'api
   editPavillon( modifpav:any, idPavion: any){
    return this.http.put(`${url_base}pavillon/update/
     ${idPavion}`,modifpav)
  }

   // methode pour supprimer les pavillon
   deletePavillon(suppav: any) {
    return this.http.delete(`${url_base}pavillon/delete/{id}`,suppav)

  }

  // methode pour aficher les detail

  voidetail() {
    return this.http.delete(`${url_base}pavillon/read/{id}`)

  }


}
