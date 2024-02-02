import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PavillonModel } from 'src/app/models/pavillon';
import { PavillonService } from 'src/app/services/pavion.service';

@Component({
  selector: 'app-pavillon',
  templateUrl: './pavion.component.html',
  styleUrls: ['./pavillon.component.css']
})
export class PavionComponent implements OnInit {
  [x: string]: any;


  selectedPavillon:any;
  dtOptions: DataTables.Settings = {};
  libelle: string='';
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;
  pavillons:PavillonModel=new PavillonModel()



  libelle_pavillon: any = "";
  type_pavillon_pavillon: any = "";
  nombres_etages_pavillon: any = "";
  nombres_chambres_pavillon: any = "";
  tabpavillons: any;
  pavillonModel: any;
  // pavillons: any;
  // pavillonModel: any;

  ngOnInit(): void {
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
  constructor(private PavillonService: PavillonService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient
    ) {
  }

  profileForm: FormGroup = this.formbuilder.group({
    libelle: ['', Validators.required],
    type_pavillon: ['', Validators.required],
    nombres_etages: ['', Validators.required],
    nombres_chambres: ['', Validators.required],
  });

  profileFormEdit: FormGroup = this.formbuilder.group({
    libelleEdition: ['', Validators.required],
    type_pavillonEdition: ['', Validators.required],
    nombres_etagesEdition: ['', Validators.required],
    nombres_chambresEdition: ['', Validators.required],
  });


  // fonction pour ajouter
  ajouterPavillon() {
    const pavillon = new PavillonModel();
    pavillon.libelle = this.libelle_pavillon;
    pavillon.type_pavillon = this.type_pavillon;
    pavillon.nombres_etages = this.nombres_etages;
    pavillon.nombres_chambres = this.nombres_chambres

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.PavillonService.userConnect(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });
    this.getPavillons();

  }

    // Fonction pour lister les utilisateurs
  getPavillons(){
    this.PavillonService.listepavillon().subscribe((reponse:any) =>{
        this.tabpavillons =  reponse.Pavillons;
        console.log(this.tabpavillons);

    });
    console.log("ddddddd");
    // this.nombres_etages=this.tabpavillons.nombres_etages;
    // this.type_pavillon=this.tabpavillons.type_pavillon;
  }
  // methode pour charger element a modifier dans formulaire

chargerPavillon( pav : PavillonModel){
  // console.warn('--------------------------',pav);
  this.libelle=pav.libelle;
  // alert(pav.libelle)
  // console.log("id pav", this.selectedPavillon);

  this.nombres_chambres=pav.nombres_chambres;
  this.type_pavillon = pav.type_pavillon;
  this.nombres_etages = pav.nombres_etages;


  this.PavillonService.editPavillon(this.profileFormEdit.value, pav.id).subscribe((res:any)=>{
    console.log(res);

  })

  }
// Methode pour charger element a modifier dans formulaire
editPavillon(pav: PavillonModel) {
  // console.warn('--------------------------',pav);
  this.PavillonService.editPavillon(this.profileFormEdit.value,pav.id)

    this.libelle = pav.libelle;
    this.type_pavillon = pav.type_pavillon;
    this.nombres_etages = pav.nombres_etages;
    this.nombres_chambres = pav.nombres_chambres;

}


// onEdite(pav:any) {
//   this.pavillons.id=pav.id
//   this.profileFormEdit.controls['libelle'].setValue(pav.libelle)
//   this.profileFormEdit.controls['type_pavillon'].setValue(pav.libelle)
//   this.profileFormEdit.controls['nombres_chambres'].setValue(pav.nombres_chambres)
//   this.profileFormEdit.controls['nombres_etages'].setValue(pav.nombres_etages)
//   this.libelle=pav.libelle;

//   this.nombres_chambres=pav.nombres_chambres;
//   this.type_pavillon = pav.type_pavillon;
//   this.nombres_etages = pav.nombres_etages;


//   }
  editerPavillon(){
    const pavillon = new PavillonModel();

    // this.pavillons.libelle=this.profileFormEdit.value.libelle
    // this.pavillons.type_pavillon=this.profileFormEdit.value.type_pavillon
    // this.pavillons.nombres_chambres=this.profileFormEdit.value.nombres_chambres
    // this.pavillons.nombres_etages=this.profileFormEdit.value.nombres_etages
    // this.PavillonService.editPavillon(this.pavillons,this.pavillons.id).subscribe((res:any)=>{
      // console.log(res);
      // alert("affich")

    // })

    if (this.libelle == "" || this.type_pavillon  == "" || this.nombres_etages == "" || this.nombres_chambres == "") {
      console.log('afficher tout les champs');

    } else {
    pavillon.libelle = this.libelle_pavillon;
    pavillon.type_pavillon = this.type_pavillon;
    pavillon.nombres_etages = this.nombres_etages;
    pavillon.nombres_chambres = this.nombres_chambres

      localStorage.setItem('pavillons', JSON.stringify(this.pavillons));
      console.log('success');

    }

  }

  deletePavillon(row: any) {
    this.PavillonService.deletePavillon(this.profileFormEdit.value, row.id).subscribe((res: any) => {
      // Traitement après la suppression
      // alert('supprimer')
    });
    console.log(row);
  }


}

