import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsModel } from 'src/app/models/etudiants'

@Component({
  selector: 'app-cas-social',
  templateUrl: './cas-social.component.html',
  styleUrls: ['./cas-social.component.css']
})
export class CasSocialComponent implements OnInit{
  CasSocialModel: any

  selectedCasSocial:any;
  dtOptions: DataTables.Settings = {};
  INE: string='';
  nom: string='';
  prenom: any;
  email: any;
  telephone: any;
  sexe: any;
  niveau_etudes: any;
  filiere: any;
  adresse: any;
  statuts: any;
  lieu_naissance: any;

  INE_cassocial: any = "";
  nom_cassocial: any = "";
  prenom_cassocial: any = "";
  email_cassocial: any = "";
  password_cassocial: any = "";
  telephone_cassocial: any = "";
  // lieu_naissance:any ="";
  sexe_cassocial: any = "";
  filiere_cassocial: any = "";
  statuts_id: any = "";
  adresse_cassocial: any = "";
  cassocials: any;



  ngOnInit(): void {
    // this.getAllEtudiantCasSocial();

    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
    this.getAllEtudiantCasSocial()
  }
  constructor(private CassocialService: CassocialService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient) {

  }


  profileForm: FormGroup = this.formbuilder.group({
    INE: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    telephone: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
    statuts_id: ['', Validators.required],
    filiere: ['', Validators.required],
    adresse: ['', Validators.required],

  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    INE: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    // statuts: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
    filiere: ['', Validators.required],
    adresse: ['', Validators.required],
  });


  // fonction pour ajouter
  ajouterEtudiantCasSocial() {
    const cascial = new EtudiantsModel();
    cascial.INE = this.INE;
    cascial.nom = this.nom;
    cascial.prenom = this.prenom;
    cascial.email = this.email;
    // cascial.telephone = this.telephone;
    cascial.sexe = this.sexe;
    cascial.filiere = this.filiere;
    cascial.statuts_id = this.statuts_id;
    cascial.niveau_etudes = this.niveau_etudes;
    cascial.adresse = this.adresse;


    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.CassocialService.userConnect(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });


  }

    // Fonction pour lister les etudiant cas social
    // getAllEtudiantCasSocial() {
    //   this.CassocialService.getAllEtudiantCasSocial().subscribe((reponse: any) => {
    //     this.cassocials = reponse.cassocial;
    //     // Assurez-vous que reponse contient le tableau complet
    //     console.log(this.cassocials);
    //   });
    // }

    // getAllEtudiantCasSocial() {
    //   this.CassocialService.getAllEtudiantCasSocial().subscribe((reponse: any) => {
    //     if (reponse && reponse.length > 0) {
    //       this.cassocials = reponse;
    //       console.log(this.cassocials);
    //     } else {
    //       console.error("Les données sont undefined ou vides.");
    //     }
    //   });
    // }

    getAllEtudiantCasSocial() {
      this.CassocialService.getAllEtudiantCasSocial().subscribe((reponse: any) => {
        // console.log('la reponse du baken est ',reponse)

          this.cassocials = reponse ;
          console.log(this.cassocials);

      });
    }



  // methode pour charger element a modifier dans formulaire
  seletedEtudiantCasSos: any = {};
  cassocialChoisi:any
  chargerEtudiantCasSocial(socialcas: EtudiantsModel) {
    this.cassocialChoisi=socialcas.id;
    this.INE = socialcas.INE;
    this.nom = socialcas.nom;
    this.prenom = socialcas.prenom;
    this.email = socialcas.email;
    // this.telephone = socialcas.telephone;
    this.sexe = socialcas.sexe;
    this.niveau_etudes = socialcas.niveau_etudes;
    this.filiere = socialcas.filiere;
    this.adresse = socialcas.adresse;
    // this.statuts_id = socialcas.statuts_id;
  }

  // editerPavillon() {

  //   const etudiantChoisi={
  //   nom : this.nom,
  //   prenom : this.prenom,
  //   email : this.email,
  //   password :this.password,
  //   roles_id :this.roles_id,
  //   telephone :this.telephone,
  //   INE :this.INE,
  //   niveau_etudes :this.niveau_etudes,
  //   filiere :this.filiere,
  //   adresse :this.adresse,

  // }

  // deletePavillon(id:any) {
  //   this.CassocialService.deletePavillon(id).subscribe((res: any) => {
  //     console.log(res);
  //   });
  //   this.getCasSocials();
  // }
  // datailPavillon(){

  //   this.getPavillons(detailpav:any) {
  //       this.seletedPavillon = this.pavillonChoisi;
  //       this.PavillonService.datailPavillon(detailpav).subscribe((res: any) => {
  //         console.log(res);
  //       });
  //     }
  //   // this.getPavillons();
  // }

}
// }
