import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandereclamation',
  templateUrl: './demandereclamation.component.html',
  styleUrls: ['./demandereclamation.component.css']
})
export class DemandereclamationComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    // Ajustez le chemin en conséquence
    document.body.appendChild(script);
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
