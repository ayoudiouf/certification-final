import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ReclamationModel } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandereclamation',
  templateUrl: './demandereclamation.component.html',
  styleUrls: ['./demandereclamation.component.css']
})
export class DemandereclamationComponent implements OnInit{

  objet: any;
  message: any;
  status: any;
  chambres_id: any;


  reclamations: any[] = [];
  ReclamationModel: any;
  seletedDemandeReclamation: any;
  // ReclamationService: any;


  constructor(private reclamationService: ReclamationService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

  }
  // Les variables de la vérification
  isobjetValid:boolean = false;
  verifMessageobjet: string = "";

  ismessageValid:boolean = false;
  verifMessagemessage: string = "";

  verifMessageobjetFunction(){
    if(!this.objet){
      this.isobjetValid = false;
      this.verifMessageobjet = "Le objet est obligatoire"
    } else{
      this.isobjetValid = true;
      this.verifMessageobjet= "";
    }
  }

  verifMessagemessageFunction(){
    if(!this.message){
      this.ismessageValid = false;
      this.verifMessagemessage = "Le message est obligatoire"
    } else{
      this.ismessageValid = true;
      this.verifMessagemessage= "";
    }
  }

  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    // const script = document.createElement('script');
    // script.src = '../../../assets/js/script.js';
    // Ajustez le chemin en conséquence
    // document.body.appendChild(script);
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
    this.getAllReclamationetudiant()
}

getAllReclamationetudiant() {
  this.reclamationService.getAllReclamationetudiant().subscribe((reponse:any) => {
    // console.log('la reponse du backend est ', reponse.Historiques);
    this.reclamations = reponse.Historiques;
    console.log(this.reclamations)
  });
}

formrecla : any = {
  objet :"",
  message : "",
}

newObjet : any= {

}
 // fonction pour faire une reclamation
 FaireUneReclamation() {
  console.log("voir donneee", this.formrecla);

this.newObjet ={
  objet : this.formrecla.objet,
  message : this.formrecla.message
}
  // const userOnline = JSON.parse(
  //   localStorage.getItem('userOnline') || '');
  this.reclamationService.FaireReclamation(this.newObjet).subscribe((response: any) => {

    console.log("lou khew", response);

    // this.getAllReclamationetudiant()
  });


}


// deleteReclamationChefEtudiant(id:any) {
//   this.reclamationService.deleteReclamationChefEtudiant(id).subscribe((res: any) => {
//     console.log('la response est ',res);
//   });
//   this.getAllReclamationetudiant();
// }

deleteReclamationChefEtudiant(id: any) {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: 'Vous ne pourrez pas revenir en arrière !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimer !',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // Si l'utilisateur confirme la suppression
      this.reclamationService.deleteReclamationChefEtudiant(id).subscribe((res: any) => {
        console.log('la response est ',res);
     // console.warn("Delete response:", res);
      });
      this.getAllReclamationetudiant();
    }
  });
}

// getDemandeReclamation(demande: any) {
//   this.seletedDemandeReclamation = demande;
//   }
}
