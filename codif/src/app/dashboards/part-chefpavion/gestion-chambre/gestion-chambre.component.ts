import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chambresModel } from 'src/app/models/chambres';
import { ChambresService } from 'src/app/services/chambres.service';

@Component({
  selector: 'app-gestion-chambre',
  templateUrl: './gestion-chambre.component.html',
  styleUrls: ['./gestion-chambre.component.css']
})
export class GestionChambreComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  formValue !: FormGroup
  chambModel : chambresModel = new chambresModel();

  chambreData : any[] = [];
  ChambreService: any;

  constructor(private  ChambresService: ChambresService, private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.formValue = this. formbuilder.group({
      libelle : [''],
      type_pavillon : [''],
      nombres_Chambres : [''],
      echeances :[''],
      nombres_lits : [''],
      pavillons_id : [''],
      etudiants_id : [''],
    })
    this.getAllChambre();


    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    // Ajustez le chemin en conséquence
    document.body.appendChild(script);
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
  postchambre(){
    this.chambModel.libelle = this.formValue.value.libelle;
    this.chambModel.nombres_limites = this.formValue.value.nombres_limites;
    this.chambModel.type_chambre = this.formValue.value.type_chambre;
    this.chambModel.nombres_lits = this.formValue.value.nombres_lits;
    this.chambModel.echeances = this.formValue.value.echeances;
    this.chambModel.pavillons_id = this.formValue.value.pavillons_id;
    this.chambModel.etudiants_id = this.formValue.value.etudiants_id;

    this.ChambresService.postchambre(this.chambModel).subscribe(res=>{
      console.log(res);
      alert("chambres ajouter avec succes")
      this.formValue.reset();
    })

  }




      getAllChambre(){

        this.ChambresService.getAllChambreChefPavillon().subscribe((reponse:any) =>{
          console.log(reponse);
            this.chambreData =  reponse.Chambre;


        },

         );

      }


  }




