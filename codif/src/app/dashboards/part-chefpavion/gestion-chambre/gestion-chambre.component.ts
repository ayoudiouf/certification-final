import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  // libelle_chambre: any = "";
  // type_chambre_chambre: any = "";
  // nombres_lits_chambre: any = "";
  // nombres_limites_chambre: any = "";
  // echances_chambre: any = "";
  // pavillons_id_chambre: any;
  // etudiants_id_chambre: any;

  chambreData : any[] = [];
  ChambreService: any;
  libelle: any;
  nombres_lits: any;
  type_chambre: any;
  nombres_limites: any;
  // echeances: any;

  constructor(private  ChambresService: ChambresService, private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.formValue = this. formbuilder.group({
      libelle : [''],
      type_pavillon : [''],
      nombres_Chambres : [''],
      // echeances :[''],
      nombres_lits : [''],
      // pavillons_id : [''],
      etudiants_id : [''],
    })
    this.getAllChambre();


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


  profileForm: FormGroup = this.formbuilder.group({
    libelle: ['', Validators.required],
    type_chambre: ['', Validators.required],
    nombres_lits: ['', Validators.required],
    nombres_limites: ['', Validators.required],
    // echeances : ['', Validators.required],
    // pavillons_id: ['', Validators.required],
    etudiants_id: ['', Validators.required],
  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    libelle: ['', Validators.required],
    type_chambre: ['', Validators.required],
    nombres_lits: ['', Validators.required],
    nombres_limites: ['', Validators.required],
    // echeances: ['', Validators.required],
    // pavillons_id: ['', Validators.required],
    etudiants_id: ['', Validators.required],
  });

  postchambreChefPavillon(){
    this.chambModel.libelle = this.formValue.value.libelle;
    this.chambModel.nombres_limites = this.formValue.value.nombres_limites;
    this.chambModel.type_chambre = this.formValue.value.type_chambre;
    this.chambModel.nombres_lits = this.formValue.value.nombres_lits;
    // this.chambModel.echeances = this.formValue.value.echeances;
    // this.chambModel.pavillons_id = this.formValue.value.pavillons_id;
    this.chambModel.etudiants_id = this.formValue.value.etudiants_id;

    this.ChambresService.postchambreChefPavillon(this.chambModel).subscribe(res=>{
      console.log(res);
      alert("chambres ajouter avec succes")
      this.formValue.reset();
    })

  }
  seletedChambre: any = {};
  chambreChoisi: any

  chargerChambre(chambreEtuduant: chambresModel) {

    this.chambreChoisi=chambreEtuduant;
    this.libelle = chambreEtuduant.libelle;
    this.nombres_lits = chambreEtuduant.nombres_lits;
    this.type_chambre = chambreEtuduant.type_chambre;
    this.nombres_limites = chambreEtuduant.nombres_limites;
    // this.echeances = chambreEtuduant.nombres_limites;
    // this.pavillons_id = chambreEtuduant.echeances;
    // this.etudiants_id = chambreEtuduant.etudiants_id;
    console.log("Chambre à charger :", chambreEtuduant);
}


      getAllChambre(){

        this.ChambresService.getAllChambreChefPavillon().subscribe((reponse:any) =>{
          console.log(reponse);
            this.chambreData =  reponse;
        },
         );
      }

      putChambre(){
    console.log("chambrechoisi", this.chambreChoisi.id )
    const chambre1Choisi={
      libelle : this.libelle,
      nombres_lits : this.nombres_lits,
      type_chambre : this.type_chambre ,
      // echeances: this.echeances ,
      nombres_limites : this.nombres_limites,
    }

    this.ChambreService.putChambre(this.chambreChoisi.id ,chambre1Choisi).subscribe((res: any) => {
      console.log(res);
    });
  }


  deletechambre(id: any){
    // console.log("Deleting chambre with ID:", id);
    this.ChambreService.deleteChambre(id).subscribe((res: any) => {
          // console.log(res);
          console.warn("Delete response:", res);
          this.getAllChambre();
        });

  }



  getChambre(chambre: any) {
    this.seletedChambre = chambre;
  }
  }




