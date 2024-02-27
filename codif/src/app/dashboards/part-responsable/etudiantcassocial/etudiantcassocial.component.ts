import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantsModel } from 'src/app/models/etudiants';
import { CassocialService } from 'src/app/services/CassocialService.service';

@Component({
  selector: 'app-etudiantcassocial',
  templateUrl: './etudiantcassocial.component.html',
  styleUrls: ['./etudiantcassocial.component.css']
})
export class EtudiantcassocialComponent implements OnInit{

  ngOnInit(): void {

    this.getdelegueAllEtudiantCasSocial();
  }

  INE: any='';
  nom: any='';
  prenom: any;
  email: any;
  telephone: any;
  sexe: any;
  niveau_etudes: any;
  filiere: any;
  password: any;
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

  rescassocials: any;
  // getArticlesPage: any;

  public truthyTab: any[] = [];

  constructor(private cassocialService: CassocialService, private formbuilder: FormBuilder, private route: Router, private http: HttpClient) {

  }

      // pagination   utulisateurTrouve :
      cassocialTrouve :any []=[];
      searchCassocial : string = "";
      getArticlesPage(): any[] {
        const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
        const indexFin = indexDebut + this.articlesParPage;
        this.cassocialTrouve = this.rescassocials.filter((element :{nom : string; prenom : string})=>
        element.nom.toLowerCase().includes(this.searchCassocial.toLowerCase()) ||
        element.prenom.toLowerCase().includes(this.searchCassocial.toLowerCase())
        );
      return this.cassocialTrouve.slice(indexDebut, indexFin);
      }
      // Méthode pour générer la liste des pages
        get pages(): number[] {
        const totalPages = Math.ceil(this. rescassocials.length / this.articlesParPage);
        return Array(totalPages).fill(0).map((_, index) => index + 1);
        }
      // Méthode pour obtenir le nombre total de pages
       get totalPages(): number {
       return Math.ceil(this. rescassocials.length / this.articlesParPage);
      }
 // Attribut pour la pagination
    articlesParPage = 6;
     // Nombre d'articles par page
    pageActuelle = 1;
    // Page actuelle                                  



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
    // password: ['', Validators.required],
    adresse: ['', Validators.required],
    date_naissance:  ['', Validators.required],

  });


  ajouterEtudiant() {
    // const etudiants = new EtudiantsModel();
    // etudiants.nom = this.nom;
    // etudiants.prenom = this.prenom;
    // etudiants.niveau_etudes = this.niveau_etudes;
    // etudiants.telephone = this.telephone;
    // etudiants.sexe = this.sexe;
    // etudiants.INE = this.INE;
    // etudiants.date_naissance = this.date_naissance;
    // etudiants.adresse = this.adresse

    let donne = {
      nom: this.nom,
      prenom: this.prenom,
      niveau_etudes: this.niveau_etudes,
      email: this.email,
      INE: this.INE,
      filiere: this.filiere,
      password: this.password,
      telephone: this.telephone,
      sexe: this.sexe,
      adresse: this.adresse,
      lieu_naissance: this.lieu_naissance,
      date_naissance: this.date_naissance,
    }

    console.log(donne);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || '');
    this.cassocialService.ajouterEtudiantCasSocial(donne).subscribe((response: any) => {

      console.log(response);
    });
    this.getdelegueAllEtudiantCasSocial();

  }
  getdelegueAllEtudiantCasSocial() {
    this.cassocialService.getdelegueAllEtudiantCasSocial().subscribe((reponse: any) => {
      // console.log('la reponse du baken est ',reponse)

        this.rescassocials = reponse ;
        console.log("nature des dooneee",this.rescassocials);

    });
  }
   // validations

   emailValidate() {
    console.warn(this.email);
    let validationEmail = document.getElementById('validationEmail');
    const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
    // const emailRegexEnd = /^[a-z]{2,}$/;
    // this.emailError = emailRegexGegin.test(this.email);
    if (emailRegexGegin.test(this.email)) {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'valide';
      validationEmail!.classList.remove('error');
      validationEmail!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.email== true) == undefined) {
        this.truthyTab.push({ email: true });
      }
      console.log(this.truthyTab);
    } else {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'invalide';
      validationEmail!.classList.remove('success');
      validationEmail!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.email == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.email == true), 1);
      }

    }
    if (this.email == "") {
      validationEmail!.innerHTML = "";
    }
    // console.log(this.truthyTab);
  }

  nomValidate() {
    let validationNom = document.getElementById('validationNom');

    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.nom)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'Valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.nom==true)==undefined) {
        this.truthyTab.push({nom:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'Invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.nom==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.nom==true),1);
      }
    }
    if (this.nom=="") {
      validationNom!.innerHTML="";
    }
  }
  prenomValidate() {
    let validationPrenom = document.getElementById('validationPrenom');
    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.prenom)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.prenom==true)==undefined) {
        this.truthyTab.push({prenom:true});
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.prenom==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.prenom==true),1);
      }
    }
    if (this.prenom=="") {
      validationPrenom!.innerHTML="";
    }
  }

  telephoneValidate() {
    let validationPrenom = document.getElementById('validationTelephone');
    const nomPrenomRegex = /^(77|76|75|78|33)[0-9]{7}$/;
    if (nomPrenomRegex.test(this.telephone)) {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.telephone==true)==undefined) {
        this.truthyTab.push({telephone:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.telephone==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.telephone==true),1);
      }
    }
    if (this.telephone=="") {
      validationPrenom!.innerHTML="";
    }
  }


  filiereValidate() {
    let validationPrenom = document.getElementById('validationFiliere');
    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.filiere)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.filiere==true)==undefined) {
        this.truthyTab.push({filiere:true});
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.filiere==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.filiere==true),1);
      }
    }
    if (this.filiere=="") {
      validationPrenom!.innerHTML="";
    }
  }
  INEValidate() {
    let validationPrenom = document.getElementById('validationINE');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.INE)) {
      // console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.INE==true)==undefined) {
        this.truthyTab.push({INE:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.INE==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.INE==true),1);
      }
    }
    if (this.INE=="") {
      validationPrenom!.innerHTML="";
    }
  }

  adresseValidate() {
    let validationPrenom = document.getElementById('validationAdresse');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.adresse)) {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.adresse==true)==undefined) {
        this.truthyTab.push({adresse:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.adresse==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.adresse==true),1);
      }
    }
    if (this.adresse=="") {
      validationPrenom!.innerHTML="";
    }
  }

  passwordValidate() {
    let validationPrenom = document.getElementById('validationPassword');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9-@_&]{7,}$/;
    if (nomPrenomRegex.test(this.password)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.password==true)==undefined) {
        this.truthyTab.push({password:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.password==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.password==true),1);
      }
    }
    if (this.password=="") {
      validationPrenom!.innerHTML="";
    }
    // console.log(this.truthyTab);
    // console.log(this.truthyTab.length);
  }

  genreValidate() {

      if (this.truthyTab.find((value:any)=>value.genre==true)==undefined) {
        this.truthyTab.push({genre:true});
      }


  }

  dateValidate() {
    let validationPrenom = document.getElementById('validationNaissance');
    let inputDate = document.getElementById('inputDate');
    console.warn(inputDate)
    // inputDate!.ariaValueMax='Thu Feb 22 2005 00:00:00 GMT+0000';
    const nomPrenomRegex = /^[0-9]+[/]+[0-9]+[/]+[0-9]{2005,}$/;
    if (nomPrenomRegex.test(this.date_naissance)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');


    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');

    }
  }

  niveau_etudesValidate() {
    let validationPrenom = document.getElementById('validationNiveauetudes');
    const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
    if (nomPrenomRegex.test(this.niveau_etudes)) {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.niveau_etudes==true)==undefined) {
        this.truthyTab.push({niveau_etudes:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.adresse));
      validationPrenom!.innerHTML = 'Invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.niveau_etudes==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.niveau_etudes==true),1);
      }
    }
    if (this.niveau_etudes=="") {
      validationPrenom!.innerHTML="";
    }
  }

lieu_naissanceValidate() {
  let validationPrenom = document.getElementById('validationLieunaissance');
  const nomPrenomRegex = /^[a-zA-Z]+[a-z0-9]{3,}$/;
  if (nomPrenomRegex.test(this.lieu_naissance)) {
    // console.log(nomPrenomRegex.test(this.prenom));
    validationPrenom!.innerHTML = 'Valide';
    validationPrenom!.classList.remove('error');
    validationPrenom!.classList.add('success');
    if (this.truthyTab.find((value:any)=>value.lieu_naissance==true)==undefined) {
      this.truthyTab.push({lieu_naissance:true});
    }
  } else {
    // console.log(nomPrenomRegex.test(this.prenom));
    validationPrenom!.innerHTML = 'Invalide';
    validationPrenom!.classList.remove('success');
    validationPrenom!.classList.add('error');
    if (this.truthyTab.find((value:any)=>value.lieu_naissance==true)!=undefined) {
      this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.lieu_naissance==true),1);
    }
  }
  if (this.lieu_naissance=="") {
    validationPrenom!.innerHTML="";
  }
}
// date_naissanceValidate() {
//   let validationPrenom = document.getElementById('validationdate_naissance');
//   const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
//   if (nomPrenomRegex.test(this.date_naissance)) {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Valide';
//     validationPrenom!.classList.remove('error');
//     validationPrenom!.classList.add('success');
//     if (this.truthyTab.find((value:any)=>value.date_naissance==true)==undefined) {
//       this.truthyTab.push({date_naissance:true});
//     }
//   } else {
//     // console.log(nomPrenomRegex.test(this.prenom));
//     validationPrenom!.innerHTML = 'Invalide';
//     validationPrenom!.classList.remove('success');
//     validationPrenom!.classList.add('error');
//     if (this.truthyTab.find((value:any)=>value.date_naissance==true)!=undefined) {
//       this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.date_naissance==true),1);
//     }
//   }
//   if (this.date_naissance=="") {
//     validationPrenom!.innerHTML="";
//   }
// }
}
