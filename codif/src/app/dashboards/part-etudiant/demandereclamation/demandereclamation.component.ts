import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public truthyTab: any[] = [];


  constructor(private reclamationService: ReclamationService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

  }


  profileForm: FormGroup = this.formbuilder.group({
    objet: ['', Validators.required],
    message: ['', Validators.required],

  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    objet: ['', Validators.required],
    message: ['', Validators.required],

  });
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {

    this.FaireUneReclamation()
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
    // this.FaireUneReclamation();
    this.getAllReclamationetudiant();
}

getAllReclamationetudiant() {
  this.reclamationService.getAllReclamationetudiant().subscribe((reponse:any) => {
    // console.log('la reponse du backend est ', reponse.Historiques);
    this.reclamations = reponse.Historiques;
    console.log(this.reclamations)
  });
}

formrecla : any = {
  objet :  "",
  message : "",
}

newObjet : any= {

}
 // fonction pour faire une reclamation
 FaireUneReclamation() {
  console.log("voir donneee", this.formrecla);

   this.newObjet ={
  objet : this.objet,
  message : this.message
}

  this.reclamationService.FaireReclamation(this.newObjet).subscribe((response: any) => {

    console.log("lou khew", response);

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

// objetValidate() {
//   let validationPrenom = document.getElementById('validationObjet');
//   const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
//   if (nomPrenomRegex.test(this.objet)) {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Valide';
//     validationPrenom!.classList.remove('error');
//     validationPrenom!.classList.add('success');
//     if (this.truthyTab.find((value: any) => value.objet == true) == undefined) {
//       this.truthyTab.push({ objet: true });
//     }
//   } else {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Invalide';
//     validationPrenom!.classList.remove('success');
//     validationPrenom!.classList.add('error');
//     if (this.truthyTab.find((value: any) => value.objet == true) != undefined) {
//       this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.objet == true), 1);
//     }
//   }
//   if (this.objet == "") {
//     validationPrenom!.innerHTML = "";
//   }
// }
// messageValidate() {
//   let validationPrenom = document.getElementById('validationMessage');
//   const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
//   if (nomPrenomRegex.test(this.message)) {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Valide';
//     validationPrenom!.classList.remove('error');
//     validationPrenom!.classList.add('success');
//     if (this.truthyTab.find((value: any) => value.message == true) == undefined) {
//       this.truthyTab.push({ message: true });
//     }
//   } else {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Invalide';
//     validationPrenom!.classList.remove('success');
//     validationPrenom!.classList.add('error');
//     if (this.truthyTab.find((value: any) => value.message == true) != undefined) {
//       this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.message == true), 1);
//     }
//   }
//   if (this.message == "") {
//     validationPrenom!.innerHTML = "";
//   }
// }
}
