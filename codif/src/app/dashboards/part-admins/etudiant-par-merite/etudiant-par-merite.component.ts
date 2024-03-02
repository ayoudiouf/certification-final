import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsParMeriteModel } from 'src/app/models/ListeEtudiantParMerite';
import { ListeEtudiantParOrdreMeriteService } from 'src/app/services/liste-etudiant-par-ordre-merite.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-etudiant-par-merite',
  templateUrl: './etudiant-par-merite.component.html',
  styleUrls: ['./etudiant-par-merite.component.css']
})
export class EtudiantParMeriteComponent implements OnInit {
  toggleSelection(_t27: any) {
    throw new Error('Method not implemented.');
  }

  seletedEtudiantParMeriteAdmin: any;
  dtOptions: DataTables.Settings = {};
  etudiantParMerites: any;

  // INE = string;
  nom: any;
  prenom: any;
  email: any;
  INE: any;
  roles_id: any;
  telephone: any;
  sexe: any;
  niveau_etudes: any;
  status_id: any;
  adresse: any;
  libelle: string = '';
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;


  ngOnInit(): void {
    this.getAllEtudiantParMeriteadmin();

    // this.etudiantParMerites = this.filterEtudiantsByNiveau(reponse, 'Licence 1');


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
  constructor(private etudiantpareriteService: ListeEtudiantParOrdreMeriteService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient
  ) {
  }


  profileForm: FormGroup = this.formbuilder.group({
    INE: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    // INE: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    sexe: ['', Validators.required],

    adresse: ['', Validators.required],

  });

  profileFormEdit: FormGroup = this.formbuilder.group({
    INE: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    // INE: ['', Validators.required],
    niveau_etudes: ['', Validators.required],
    sexe: ['', Validators.required],

    adresse: ['', Validators.required],

  });


  // fonction pour ajouter
  ajouterEtudiantParMerite() {
    const etu = new EtudiantsParMeriteModel();
    // cassocial.INE = this.INE;
    etu.nom = this.nom;
    etu.prenom = this.prenom;
    etu.email = this.email
    etu.INE = this.INE
    etu.telephone = this.telephone
    etu.sexe = this.sexe
    etu.niveau_etudes = this.niveau_etudes
    etu.adresse = this.adresse

    console.log(this.profileForm);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.etudiantpareriteService.AjouterEtudiantParMerite(this.profileForm.value).subscribe((response: any) => {

      console.log(response);

      this.getAllEtudiantParMeriteadmin();
    });
  }
  // fonction qui permet de lister
  etudiantlicenceun: any[] = [];
  etudianslicencedeux: any[] = [];
  etudianslicencedtrois: any[] = [];


  currentFilter: string = 'all'; // Initial value, showing all students

  filterStudents(filter: string) {
    this.currentFilter = filter;
    this.getAllEtudiantParMeriteadmin();
  }

  getAllEtudiantParMeriteadmin() {
    this.etudiantpareriteService.getAllEtudiantParMeriteadmin().subscribe((reponse: any) => {
        this.etudiantParMerites = reponse.filter((etudiant: any) => {
            if (this.currentFilter === 'all') {
                return true; // Show all students
            } else if (this.currentFilter === 'licence1') {
                return etudiant.niveau_etudes === 'Licence 1'; // Show only Licence 1 students
            } else if (this.currentFilter === 'licence2') {
                return etudiant.niveau_etudes === 'Licence 2'; // Show only Licence 2 students
            }
            // Add an else clause to return a default value if no condition is met
            return false;
        });
    });
}



  // getAllEtudiantParMeriteadmin() {
  //   this.etudiantpareriteService.getAllEtudiantParMeriteadmin().subscribe((reponse) => {
  //     // console.log('la reponse du baken est ',reponse)

  //     this.etudiantParMerites = reponse;
  //     console.log(this.etudiantParMerites);
  //     console.log("merite", reponse);
  //     this.etudiantParMerites.forEach((elt: any) => {
  //       if (elt.niveau_etudes == "Licence 1") {
  //         this.etudiantlicenceun.push(elt);
  //       } else if (elt.niveau_etudes == "Licence 2") {
  //         this.etudianslicencedeux.push(elt);
  //       } else {
  //         this.etudianslicencedtrois.push(elt);
  //       }

  //     })
  //     console.log(this.etudiantlicenceun);
  //     console.log(this.etudianslicencedeux);
  //   });
  // }


  filterEtudiantsByNiveau(etudiants: any[], niveau: string): any[] {
    return etudiants.filter(etudiant => etudiant.niveau_etudes === niveau);
  }

  // fonction qui permet de valider un etudiant
  // validerEttudiant(id: any) {

  //   this.etudiantpareriteService.validerEtudiant(id).subscribe((respons)=>{
  //     console.log("est validi oui!!!!", respons);
  //   })
  // }



  validerEtudiant(id: any) {
    this.etudiantpareriteService.validerEtudiant(id).subscribe(
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
          // text: 'Une erreur s\'est produite lors de la validation de l\'étudiant. Veuillez réessayer plus tard.',
          text: 'Désolé l\'étudiant a été déjà valider. Veuillez réessayer plus tard.',
        });
      }
    );
  }


}

