import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CassocialService } from 'src/app/services/CassocialService.service';
import { EtudiantsParMeriteModel } from 'src/app/models/ListeEtudiantParMerite';
import { ListeEtudiantParOrdreMeriteService } from 'src/app/services/liste-etudiant-par-ordre-merite.service';
@Component({
  selector: 'app-etudiant-par-merite',
  templateUrl: './etudiant-par-merite.component.html',
  styleUrls: ['./etudiant-par-merite.component.css']
})
export class EtudiantParMeriteComponent implements OnInit{
toggleSelection(_t27: any) {
throw new Error('Method not implemented.');
}

  seletedEtudiantParMeriteAdmin:any;
  dtOptions: DataTables.Settings = {};
  etudiantParMerites: any;

  // INE = string;
  nom : any;
  prenom : any;
  email : any;
  INE : any;
  roles_id : any;
  telephone : any;
  sexe : any;
  niveau_etudes: any;
  status_id : any;
  adresse : any;
  libelle: string='';
  type_pavillon: any;
  nombres_etages: any;
  nombres_chambres: any;


  ngOnInit(): void {
    this.getAllEtudiantParMeriteadmin();

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

      this.getAllEtudiantParMeriteadmin() ;
    });
  }
// fonction qui permet de lister
  getAllEtudiantParMeriteadmin() {
    this.etudiantpareriteService.getAllEtudiantParMeriteadmin().subscribe((reponse) => {
      // console.log('la reponse du baken est ',reponse)

        this.etudiantParMerites = reponse ;
        console.log("merite",reponse);

    });
  }
// fonction qui permet de voir les detail
  // getEtudiantParMeriteAdmin(etudiant: any) {
  //   this.seletedEtudiantParMeriteAdmin = etudiant;
  // }


// fonction qui permet de valider un etudiant
validerEttudiant(id: any) {
  // if (id) {
  //     console.log("Valide étudiant avec l'ID:", id);
  //     this.etudiantpareriteService.validerEtudiant(id).subscribe((response: any) => {
  //         console.log(response);
  //         this.etudiantParMerites = response;
  //     });
  //     this.getAllEtudiantParMeriteadmin();
  // } else {
  //     console.error("ID de l'étudiant non défini");
  // }
  this.etudiantpareriteService.validerEtudiant(id).subscribe((respons)=>{
    console.log("est validi oui!!!!", respons);
  })


}
}

