import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationModel } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

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

  constructor(private reclamationService: ReclamationService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

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
  getReclamation(pavillon: any) {
    this.seletedReclamation = pavillon;
  }

  // La méthode qui permet de changer l'état d'une réclamation
  changeEtat(id: number) {
    const reclamation =  this.reclamationTrouve.find((elt: any) => elt.id == id);
    // console.log(reclamation);
    const data = {
      status: reclamation.status == "Ouvert" ? "Traité" : "Ouvert"
    }
    this.reclamationService.editReclamation(id, data).subscribe(
      (response) =>{
        console.log(response);

    this.getAllReclamation();


      }
    )
  }

  deleteReclamationChefPavillon(id:any) {
    this.reclamationService.deleteReclamationChefPavillon(id).subscribe((res: any) => {
      console.log('la response est ',res);

    });
    this.getAllReclamation();
  }
  }




  // getAllReclamations() {
  //   this.reclamationService.getAllReclamation().subscribe((reponse: any) => {
  //     // console.log('la reponse du baken est ',reponse)
  //     if ([reponse][0] ['Array'].length != 0) {
  //       this.reclamations = [reponse][0] ['Array'];
  //       console.log('je suis une reclamation' ,this.reclamations);
  //     }
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des briefs', error);
  //     }
  //   );


  //   };




