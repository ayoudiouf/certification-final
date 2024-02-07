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

  seletedEtudiantParMerite: any;


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
    this.CassocialService.ajouterEtudiantCasSocial(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });


  }

  ajouterEtudiant() {
    const etudiants = new EtudiantsModel();
    etudiants.nom = this.nom;
    etudiants.prenom = this.prenom;
    etudiants.niveau_etudes = this.niveau_etudes;
    etudiants.telephone = this.telephone
    etudiants.INE = this.INE
    etudiants.adresse = this.adresse

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.CassocialService.ajouterEtudiantCasSocial(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

    });
    this.getAllEtudiantCasSocial();

  }
    getAllEtudiantCasSocial() {
      this.CassocialService.getAllEtudiantCasSocial().subscribe((reponse: any) => {
        // console.log('la reponse du baken est ',reponse)

          this.cassocials = reponse ;
          console.log(this.cassocials);

      });
    }



    GetEtudiantParMerite(pavillon: any) {
      this.seletedEtudiantParMerite = pavillon;
    }
}

