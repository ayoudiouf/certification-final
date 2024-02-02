import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambresService } from 'src/app/services/chambres.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  libelle: any;
  type_chambre : any;
  nombres_lits: any;
  nombres_limites: any;
  pavillons_id: any;
  etudiants_id: any;



  tabchambre: any[] = [];



  libelle_chambre: any = "";
  type_chambre_chambre: any = "";
  nombres_lits_chambre: any = "";
  nombres_limites_chambre: any = "";
  pavillons_id_chambre: any;
  etudiants_id_chambre: any;


  ngOnInit(): void {
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
  constructor(private ChambreServices: ChambresService, private formbuilder: FormBuilder, private route: Router) {

  }
 
      // Fonction pour lister les chambres
      pavillon(){
        this.ChambreServices.listechambre().subscribe(
          (reponse:any) =>{
            // console.log("affichage chambre",reponse);
            // console.log("affichage chambre",reponse.chambre);
            this.tabchambre =  reponse.Pavillons;
            console.log(this.tabchambre);


          },

        )
      }

}
