import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantsParMeriteModel } from 'src/app/models/ListeEtudiantParMerite';
import { ListeEtudiantParOrdreMeriteService } from 'src/app/services/liste-etudiant-par-ordre-merite.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent  implements OnInit{
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

  etudiantsparmerites: any[] = [];

  seletedEtudiantChefPeda: any;

  ListeEtudiantParOrdreMeriteService: any;

  ngOnInit(): void {
    this.getAllEtudiantParMerite();

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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
  constructor(private listeEtudiantParOrdreMeriteService: ListeEtudiantParOrdreMeriteService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient){

  }

  profileForm: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    telephone: ['', Validators.required],
    sexe: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    moyennes: ['', Validators.required],
    filiere: ['', Validators.required],
    INE: ['', Validators.required],
    adresse: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
  });

  profileFormEdite: FormGroup = this.formbuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    telephone: ['', Validators.required],
    sexe: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    moyennes: ['', Validators.required],
    filiere: ['', Validators.required],
    INE: ['', Validators.required],
    adresse: ['', Validators.required],
    lieu_naissance: ['', Validators.required],
  });

  //  fonction pour ajouter
   ajouterEtudiant() {
    const etudiants = new EtudiantsParMeriteModel();
    etudiants.nom = this.nom;
    etudiants.prenom = this.prenom;
    etudiants.niveau_etudes = this.niveau_etudes;
    etudiants.telephone = this.telephone;
    etudiants.INE = this.INE;
    etudiants.sexe = this.sexe;
    etudiants.password = this.password;
    etudiants.email = this.email;
    etudiants.moyennes = this.moyennes;
    etudiants.filiere = this.filiere;
    etudiants.lieu_naissance = this.lieu_naissance;
    etudiants.date_naissance = this.date_naissance;

    console.log(this.profileForm.value);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.listeEtudiantParOrdreMeriteService.AjouterEtudiantchefPedagogique(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

      this.getAllEtudiantParMerite();
    });

  }



  getAllEtudiantParMerite() {
    this.listeEtudiantParOrdreMeriteService.getAllEtudiantParMerite().subscribe((reponse: any) => {
      console.log('la reponse du baken est ',reponse)
      this.etudiantsparmerites = reponse;
      // console.log('je suis etudiant',reponse);



    });
  }

  etudiantChoisi: any


  chargerEtudiant(etudiant: EtudiantsParMeriteModel) {

   this.etudiantChoisi=etudiant;
   this.nom = etudiant.nom;
   this.prenom = etudiant.prenom;
   this.niveau_etudes = etudiant.niveau_etudes;
   this.telephone = etudiant.telephone;
   this.INE = etudiant.INE;
   this.adresse = etudiant.adresse;
   console.log("Etudiant à charger :", etudiant);
}




EditEtutudiant(){
   console.log("chambrechoisi", this.etudiantChoisi.id )
   const etudiant1Choisi={
     nom : this.nom,
     prenom : this.prenom,
     niveau_etudes : this.niveau_etudes ,
     telephone : this.telephone,
     INE : this.INE,
     adresse : this.adresse,
   }

   this.ListeEtudiantParOrdreMeriteService.putChambreAdmin(this.etudiantChoisi.id ,etudiant1Choisi).subscribe((res: any) => {
     console.log(res);
   });
 }





  getEtudiantParMerite(etu: any) {
    this.seletedEtudiantChefPeda = etu;
  }

}
