import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-par-merite',
  templateUrl: './etudiant-par-merite.component.html',
  styleUrls: ['./etudiant-par-merite.component.css']
})
export class EtudiantParMeriteComponent implements OnInit{
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
