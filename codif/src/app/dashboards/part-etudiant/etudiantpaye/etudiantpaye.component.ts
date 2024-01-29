import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiantpaye',
  templateUrl: './etudiantpaye.component.html',
  styleUrls: ['./etudiantpaye.component.css']
})
export class EtudiantpayeComponent implements OnInit{
  dtOptions: DataTables.Settings = {};

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
}