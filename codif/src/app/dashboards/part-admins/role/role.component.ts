import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  dtOptions: DataTables.Settings = {};

  // nomRole: any = '';
  nomRole: any;

  dataRole: any[] = [];
  ngOnInit(): void {
    this.getAllnomRole();

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
  public truthyTab: any[] = [];
  constructor(private roleService: ServicesService, private formbuilder: FormBuilder, private route: Router) {
  }
  AjouterRole() {

    let donne = {
      nomRole: this.nomRole,

    }

    console.log(donne);
    const userOnline = JSON.parse(
      localStorage.getItem('userOnline') || ''); this.roleService.AjouterRole(donne).subscribe((response: any) => {
      console.log(response);
      this.getAllnomRole();
    });

  }
  getAllnomRole(){
    this.roleService.getAllnomRole().subscribe((reponse: any) => {
      this.dataRole = reponse.roles
        console.log("rollllllll",this.dataRole);
        // console.log(reponse.nomRole); this.tabRole = reponse.nomRole;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  // validation
  nomRoleValidate() {
    let validationNom = document.getElementById('validationNomrole');

    const nomPrenomRegex = /^[a-zA-Z]{2,25}$/;
    if (nomPrenomRegex.test(this.nomRole)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.nomRole == true) == undefined) {
        this.truthyTab.push({ nomRole: true });
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.nomRole == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.nomRole == true), 1);
      }
    }
    if (this.nomRole == "") {
      validationNom!.innerHTML = "";
    }
  }
 }

