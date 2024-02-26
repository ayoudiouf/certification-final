import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsModel } from 'src/app/models/etudiants'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cas-social',
  templateUrl: './cas-social.component.html',
  styleUrls: ['./cas-social.component.css']
})
export class CasSocialComponent implements OnInit{
  CasSocialModel: any

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
  date_naissance: any;

  INE_cassocial: any = "";
  nom_cassocial: any = "";
  prenom_cassocial: any = "";
  email_cassocial: any = "";
  password_cassocial: any = "";
  telephone_cassocial: any = "";
  sexe_cassocial: any = "";
  filiere_cassocial: any = "";
  statuts_id: any = "";
  adresse_cassocial: any = "";
  // date_naissance: any = "";

  cassocials: any;



  ngOnInit(): void {


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
    sexe: ['', Validators.required],
    statuts_id: ['', Validators.required],
    filiere: ['', Validators.required],
    adresse: ['', Validators.required],
    date_naissance:  ['', Validators.required],

  });


  ajouterEtudiant() {
    const etudiants = new EtudiantsModel();
    etudiants.nom = this.nom;
    etudiants.prenom = this.prenom;
    etudiants.niveau_etudes = this.niveau_etudes;
    etudiants.telephone = this.telephone;
    etudiants.sexe = this.sexe;
    etudiants.INE = this.INE;
    etudiants.date_naissance = this.date_naissance;
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



    // getEtudiantcassocial(etudiant: any) {
    //   this.seletedEtudiantCasSocial = etudiant;
    // }

      // fonction qui permet de valider un etudiant
// validerEttudiant(id: any) {

//   this.CassocialService.validerEtudiant(id).subscribe((respons)=>{
//     console.log("est validi oui!!!!", respons);
//   })
// }

validerEtudiant(id: any) {
  this.CassocialService.validerEtudiant(id).subscribe(
    (respons) => {
      console.log("est validé oui!!!!", respons);
      // Afficher une alerte SweetAlert pour indiquer que l'étudiant a été validé avec succès
      Swal.fire({
        icon: 'success',
        title: 'Étudiant Validé!',
        text: 'L\'étudiant a été validé avec succès.',
      });
    },
    (error) => {
      console.error("Une erreur s'est produite lors de la validation de l'étudiant", error);
      // Afficher une alerte SweetAlert pour indiquer qu'une erreur s'est produite
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Désolé l\'étudiant a été déjà valider. Veuillez réessayer plus tard.',
      });
    }
  );
}
}

