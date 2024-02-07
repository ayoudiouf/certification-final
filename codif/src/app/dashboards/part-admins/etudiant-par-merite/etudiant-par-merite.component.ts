import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsParMeriteModel } from 'src/app/models/ListeEtudiantParMerite';
@Component({
  selector: 'app-etudiant-par-merite',
  templateUrl: './etudiant-par-merite.component.html',
  styleUrls: ['./etudiant-par-merite.component.css']
})
export class EtudiantParMeriteComponent implements OnInit{

  selectedCasSocial:any;
  dtOptions: DataTables.Settings = {};
  etudiantParMerites: any;

  // INE = string;
  nom : any;
  prenom : any;
  email : any;
  password : any;
  roles_id : any;
  telephone : any;
  date_naisssance : any;
  lieu_naissance: any;
  sexe : any;
  niveau_etudes: any;
  filiere : any;
  status_id : any;
  adress : any;
  libelle: string='';
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;



  INE_cassocial : any ="";
  nom_cassocial : any= "";
  prenom_cassocial : any ="";
  email_cassocial : any ="";
  password_cassocial : any= "";
  roles_id_cassocial : any ="";
  telephone_cassocial : any ="";
  date_naisssance_cassocial : any ="";
  lieu_naissance_cassocial: any ="";
  sexe_cassocial : any ="";
  niveau_etudes_cassocial : any ="";
  filiere_cassocial : any ="";
  status_id_cassocial : any ="";
  adress_cassocial : any ="";
  EtudiantsParMeriteModel: any;

  ngOnInit(): void {
    // this.getCasSocial();
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
  constructor(private CassocialService: CassocialService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient
    ) {
  }



  // fonction pour ajouter
  ajouterEtudiantParMerite() {
    const cassocial = new EtudiantsParMeriteModel();
    // cassocial.INE = this.INE;
    cassocial.nom = this.nom;
    cassocial.prenom = this.prenom;
    cassocial.email = this.email
    cassocial.roles_id = this.password
    cassocial.telephone = this.password
    cassocial.sexe = this.sexe
    cassocial.filiere = this.filiere
    cassocial.status_id = this.status_id
    cassocial.adresse = this.adress


  }

  getAllEtudiantParMerite() {
    this.EtudiantsParMeriteModel.getAllEtudiantCasSocial().subscribe((reponse: any) => {
      // console.log('la reponse du baken est ',reponse)

        this.etudiantParMerites = reponse ;
        console.log(this.etudiantParMerites);

    });
  }
}
