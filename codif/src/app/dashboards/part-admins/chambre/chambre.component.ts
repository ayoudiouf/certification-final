import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { chambresModel } from 'src/app/models/chambres';
import { ChambresService } from 'src/app/services/chambres.service';
import { PavillonService } from 'src/app/services/pavion.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  id : string ="";
  libelle: string = "";
  type_chambre : string ="";
  nombres_lits: string ="";
  nombres_limites:  string ="";
  pavillons_id: string = "";
  etudiants_id: string = "";



  tabchambres: any[] = [];



  // libelle_chambre: any = "";
  // type_chambre_chambre: any = "";
  // nombres_lits_chambre: any = "";
  // nombres_limites_chambre: any = "";
  // pavillons_id_chambre: any;
  // etudiants_id_chambre: any;

  chambre: any;
  tabpavillons: any;

  ngOnInit(): void {

    this.getAllChambre();
    this.getPavillons();

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
  constructor(
    private ChambreServices: ChambresService,
    private formbuilder: FormBuilder,
    private route: Router,
    private Pavillonservice : PavillonService
    ) {

  }



profileForm: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],

});

profileFormEdite: FormGroup = this.formbuilder.group({
  libelle: ['', Validators.required],
  type_chambre: ['', Validators.required],
  nombres_lits: ['', Validators.required],
  nombres_limites: ['', Validators.required],
  pavillons_id: ['', Validators.required],

});

// ...

ajouterChambre() {
  // Utilisez les valeurs du formulaire correctes
  const chambres = new chambresModel();
  chambres.libelle = this.libelle;
  chambres.type_chambre = this.profileForm.value.type_chambre;
  chambres.nombres_lits = this.profileForm.value.nombres_lits;
  chambres.nombres_limites = this.profileForm.value.nombres_limites;
  chambres.pavillons_id = this.profileForm.value.pavillons_id;
  // chambres.etudiants_id = this.profileForm.value.etudiants_id;

  console.log(this.profileForm.value);
  const userOnline = JSON.parse(localStorage.getItem('userOnline') || '');
  this.ChambreServices.postchambre(chambres).subscribe((response: any) => {
    console.log(response);
  });
}


    // Fonction pour lister les etudiant Chambre
    getAllChambre(){

    this.ChambreServices.getAllChambre().subscribe((reponse:any) =>{
      this.tabchambres =  reponse;
      console.log("neekkk", this. tabchambres);


    },

     );
    // console.log("ddddddd");
  }

  seletedChambre: any = {};
  chambreChoisi: any;
  // lilibelleUse:string


   chargerChambre(chambreEtuduant: any) {
    // if(chambreEtuduant && chambreEtuduant.id)
    // {

      this.id = chambreEtuduant.id;
      // this.libelle = chambreEtuduant.libelle;
      this.libelle = chambreEtuduant.libelle;
      this.nombres_lits = chambreEtuduant.nombres_lits;
      this.type_chambre = chambreEtuduant.type_chambre;
      this.nombres_limites = chambreEtuduant.nombres_limites;
    // }


    console.log("Chambre à charger :", chambreEtuduant.id);
}




  putChambreAdmin(){
    // console.log("chambrechoisi", this.id )
  //  if(this.chambreChoisi){
  this.ChambreServices.putChambreAdmin(this.id,{
  libelle: this.libelle,
  nombres_limites: this.nombres_limites,
  nombres_lits: this.nombres_lits,
  type_chambre: this.type_chambre,

}).subscribe((Response : any)=>{
  console.log("odifiond", Response);
})
  //  }
  }


  deletechambre(id: any){
    // console.log("Deleting chambre with ID:", id);
    this.ChambreServices.deleteChambre(id).subscribe((res: any) => {
          // console.log(res);
          console.warn("Delete response:", res);
        });
        this.getAllChambre();

  }

  // deletePavillon(id:any) {
  //   this.Pavillonservice.deletePavillon(id).subscribe((res: any) => {
  //     console.log('la response est ',res);

  //   });
  //   this.getPavillons();
  // }

  getChambre(chambre: any) {
    this.seletedChambre = chambre;
  }

    // Fonction pour lister les utilisateurs
    getPavillons(){

      this.Pavillonservice.listepavillon().subscribe((reponse:any) =>{
          this.tabpavillons =  reponse.Pavillon;
          console.log(this.tabpavillons);

      });

    }

}
