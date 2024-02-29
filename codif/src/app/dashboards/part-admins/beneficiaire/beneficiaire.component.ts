import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BeneficiaireService } from 'src/app/services/beneficiaire.service';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent {

  dtOptions: DataTables.Settings = {};

  nom:any;
  prenom:any;
  email:any;
  password:any;
  niveau_etudes:any;
  moyennes:any;
  telephone:any;
  sexe:any;
  filiere:any;
  INE:any;
  adresse:any;
  lieu_naissance:any;
  date_naissance:any;

  tabbeneficiaires: any[] = [];

  ngOnInit(): void {
    this.getAllBeneficiaire();

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
  // public truthyTab: any[] = [];
  constructor(private beneficiaireService: BeneficiaireService, private formbuilder: FormBuilder, private route: Router) {
  }

  getAllBeneficiaire(){
    this.beneficiaireService.getAllBeneficiaire().subscribe((reponse: any) => {
      this.tabbeneficiaires = reponse
        console.log("je suis benefiaire",this.tabbeneficiaires);
        // console.log(reponse.nomRole); this.tabRole = reponse.nomRole;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
