import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationModel } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit{
  // dtOptions: DataTables.Settings = {};
  reclamations: any[] = [];
  // reclamations: any[] = [];
  ReclamationModel: any;
  seletedReclamation: any;
  // ReclamationService: any;

  constructor(private reclamationService: ReclamationService, private formbuilder: FormBuilder, private route: Router, private renderer: Renderer2, private http: HttpClient){

  }
    // pagination   utulisateurTrouve :
    reclamationTrouve :any []=[];
     searchUtulisateur : string = "";
     getArticlesPage(): any[] {
       const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
       const indexFin = indexDebut + this.articlesParPage;
       this.reclamationTrouve = this.reclamations.filter((element :{objet : string; message : string})=>
       element.objet.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) ||
       element.message.toLowerCase().includes(this.searchUtulisateur.toLowerCase())
       );
     return this.reclamationTrouve.slice(indexDebut, indexFin);
     }
     // Méthode pour générer la liste des pages
       get pages(): number[] {
       const totalPages = Math.ceil(this. reclamations.length / this.articlesParPage);
       return Array(totalPages).fill(0).map((_, index) => index + 1);
       }
     // Méthode pour obtenir le nombre total de pages
      get totalPages(): number {
      return Math.ceil(this. reclamations.length / this.articlesParPage);
     }
// Attribut pour la pagination
   articlesParPage = 4;
    // Nombre d'articles par page
   pageActuelle = 1;
   // Page actuelle

    ngOnInit() {
      this.getAllReclamation();
    }

    // La methode qui permet de lister les réclamtions
    getAllReclamation() {
      this.reclamationService.getAllReclamation().subscribe((response: any) => {
        console.log('la reponse du backend est ', response);
        this.reclamations = response['Reclamation: '];
        // Mettez à jour votre variable avec les données de réponse appropriées
        console.log("wouyyyyyyyyy", this.reclamations);
      });
    }



// La méthode qui permet de lire les details d'une réclamation
  // getReclamation(pavillon: any) {
  //   this.seletedReclamation = pavillon;
  // }

  // La méthode qui permet de changer l'état d'une réclamation
  changeEtat(id: number) {
    const reclamation =  this.reclamationTrouve.find((elt: any) => elt.id == id);
    // console.log(reclamation);
    const newStatus = reclamation.status === "Ouvert" ? "Traité" : "Ouvert";
    const data = {
      status: newStatus
    };;
    // reclamation.status == "Ouvert" ? "Traité" : "Ouvert"
    this.reclamationService.editReclamation(id, data).subscribe(
      (response) =>{
        console.log(response);
        this.updateIconClass(id, newStatus);

    this.getAllReclamation();


      }
    )
  }
  updateIconClass(id: number, newStatus: string) {
    const iconElement = document.getElementById(`icon-${id}`);
    if (iconElement) {
        // Supprimer toutes les classes existantes
        iconElement.classList.remove("Ouvert", "Traité");
        // Ajouter la classe correspondante au nouvel état
        iconElement.classList.add(newStatus.toLowerCase());
    }
}

  // deleteReclamationChefPavillon(id:any) {
  //   this.reclamationService.deleteReclamationChefPavillon(id).subscribe((res: any) => {
  //     console.log('la response est ',res);

  //   });
  //   this.getAllReclamation();
  // }

  deleteReclamationChefPavillon(id: any) {
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
        this.reclamationService.deleteReclamationChefPavillon(id).subscribe((res: any) => {
          console.log('la response est ',res);
       // console.warn("Delete response:", res);
        });
        this.getAllReclamation();
      }
    });
  }

  }






