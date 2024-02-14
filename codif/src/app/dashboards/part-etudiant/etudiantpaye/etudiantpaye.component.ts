import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaiementService } from 'src/app/services/paiement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etudiantpaye',
  templateUrl: './etudiantpaye.component.html',
  styleUrls: ['./etudiantpaye.component.css']
})
export class EtudiantpayeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  payment: any;
  paiementData: any;

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
  }
  constructor(private servicePaiement: PaiementService, private router: Router) { }
 
  payer() {
    this.servicePaiement.payer().subscribe((reponse: any) => {
      console.warn(reponse);
      window.open(reponse.payment_url,'_self');
    });

    // constructor(private servicePaiement: PaiementService) { }


  }
}
