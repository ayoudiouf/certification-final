import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-notes',
  templateUrl: './ajout-notes.component.html',
  styleUrls: ['./ajout-notes.component.css']
})
export class AjoutNotesComponent implements OnInit{
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
