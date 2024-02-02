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

  // Méthode pour supprimer un pavillon sans utiliser Observable
deletePavillon(id: any, suppav: any) {
  const deleteUrl = `${url_base}pavillon/delete/${id}`;

  // Utilisation de HttpClient pour envoyer la requête de suppression
  return this.http.delete(deleteUrl, { headers: suppav });
}

}
