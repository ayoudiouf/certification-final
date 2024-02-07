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
  dtOptions: DataTables.Settings = {};

  reclamations: any[] = [];
  ReclamationModel: any;
  seletedReclamation: any;
  // ReclamationService: any;

  constructor(private reclamationService: ReclamationService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

  }

  // this.getAllReclmation()

  ngOnInit(): void {
    this.getAllReclamation()
    // this.getAllReclamations()

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
  }

  // getAllReclamation() {
  //   this.reclamationService.getAllReclamation().subscribe((reponse: any) => {
  //     console.log('la reponse du baken est ',reponse)
  //     this.reclamations = reponse;
      // console.log("je suis reclamation",reponse);
      // console.log("je suis reclamation",this.reclamations);


      // Utiliser la méthode concat pour fusionner tous les sous-arrays en un seul tableau
    // this.reclamations = [].concat(reponse);
    // console.log(this.reclamations);

    // });

    getAllReclamation() {
      this.reclamationService.getAllReclamation().subscribe((reponse: any) => {
        // console.log('la reponse du backend est ', reponse);
        this.reclamations = reponse;
        console.log(this.reclamations)
      });
    }




  getReclamation(pavillon: any) {
    this.seletedReclamation = pavillon;
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




