import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { PavillonModel } from 'src/app/models/pavillon';

import { PavillonService } from 'src/app/services/pavion.service';

@Component({
  selector: 'app-pavillon',
  templateUrl: './pavion.component.html',
  styleUrls: ['./pavillon.component.css']
})
export class PavionComponent implements OnInit {
 
  

  dtOptions: DataTables.Settings = {};
  libelle: any;
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;


  tabpavillon: any[] = [];



  libelle_pavillon: any = "";
  type_pavillon_pavillon: any = "";
  nombres_etages_pavillon: any = "";
  nombres_chambres_pavillon: any = "";
  tabpavillons: any;
  pavillonModel: any;
pavillons: any;

  


  // pavillonModel: any;


  

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
    this.pavillon();
  }
  constructor(private PavillonService: PavillonService, private formbuilder: FormBuilder, private route: Router,
    ) {
  }
  
  profileForm: FormGroup = this.formbuilder.group({
    libelle: ['', Validators.required],
    type_pavillon: ['', Validators.required],
    nombres_etages: ['', Validators.required],
    nombres_chambres: ['', Validators.required],


  });

  // fonction pour ajouter
  ajouterPavillon() {
    const pavillon = new PavillonModel();
    pavillon.libelle = this.libelle_pavillon;
    pavillon.type_pavillon = this.type_pavillon;
    pavillon.nombres_etges = this.nombres_etages;
    pavillon.nombres_chambre = this.nombres_chambres

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.PavillonService.userConnect(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });
    this.pavillon();

  }

    // Fonction pour lister les utilisateurs
    pavillon(){
    this.PavillonService.listepavillon().subscribe(
      (reponse:any) =>{
        // console.log("affichage pavillon",reponse);
        // console.log("affichage pavillon",reponse.Pavillons);

        
        
        this.tabpavillon =  reponse.Pavillons;
        console.log(this.tabpavillon);
        

      },
     
    )
  }

    
    //details pavillon 
    getPavillonById(id: number){
      document.getElementById("btn-modal-edit")?.click();
      // this.PavillonService.getPavillon(id).subscribe((repons : any)=>{
        
      // })
    
    // console.log(this.PavillonService.details);
  
  }

}
