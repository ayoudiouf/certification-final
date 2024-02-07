import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { chambresModel } from 'src/app/models/chambres';
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



  tabchambres: any[] = [];



  libelle_chambre: any = "";
  type_chambre_chambre: any = "";
  nombres_lits_chambre: any = "";
  nombres_limites_chambre: any = "";
  pavillons_id_chambre: any;
  etudiants_id_chambre: any;

  chambre: any;


  ngOnInit(): void {

    this.getAllChambre();

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



profileForm: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],
  etudiants_id: ['', Validators.required],
});

profileFormEdite: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],
  etudiants_id: ['', Validators.required],
});

// ...

ajouterChambre() {
  // Utilisez les valeurs du formulaire correctes
  const chambres = new chambresModel();
  chambres.libelle = this.profileForm.value.libelle_chambre;
  chambres.type_chambre = this.profileForm.value.type_chambre_chambre;
  chambres.nombres_lits = this.profileForm.value.nombres_lits_chambre;
  chambres.nombres_limites = this.profileForm.value.nombres_limites_chambre;
  chambres.pavillons_id = this.profileForm.value.pavillons_id_chambre;
  chambres.etudiants_id = this.profileForm.value.etudiants_id_chambre;

  console.log(this.profileForm.value);
  const userOnline = JSON.parse(localStorage.getItem('userOnline') || '');
  this.ChambreServices.postchambre(chambres).subscribe((response: any) => {
    console.log(response);
  });
}




    // Fonction pour lister les etudiant Chambre
    getAllChambre(){

    this.ChambreServices.getAllChambre().subscribe((reponse:any) =>{
      console.log(reponse);
        this.tabchambres =  reponse.Chambre;


    },

     );
    // console.log("ddddddd");
  }

  seletedChambre: any = {};
  chambreChoisi: any


   chargerChambre(chambreEtuduant: chambresModel) {

    this.chambreChoisi=chambreEtuduant;
    this.libelle = chambreEtuduant.libelle;
    this.nombres_lits = chambreEtuduant.nombres_lits;
    this.type_chambre = chambreEtuduant.type_chambre;
    this.nombres_limites = chambreEtuduant.nombres_limites;
    this.pavillons_id = chambreEtuduant.pavillons_id;
    this.etudiants_id = chambreEtuduant.etudiants_id;
    console.log("Chambre à charger :", chambreEtuduant);
}




  putChambreAdmin(){
    console.log("chambrechoisi", this.chambreChoisi.id )
    const chambre1Choisi={
      libelle : this.libelle,
      nombres_lits : this.nombres_lits,
      type_chambre : this.type_chambre ,
      nombres_limites : this.nombres_limites,
    }

    this.ChambreServices.putChambreAdmin(this.chambreChoisi.id ,chambre1Choisi).subscribe((res: any) => {
      console.log(res);
    });
  }


  deletechambre(id: any){
    // console.log("Deleting chambre with ID:", id);
    this.ChambreServices.deleteChambre(id).subscribe((res: any) => {
          // console.log(res);
          console.warn("Delete response:", res);
          this.getAllChambre();
        });

  }



  getChambre(chambre: any) {
    this.seletedChambre = chambre;
  }

}
