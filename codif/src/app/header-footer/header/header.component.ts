import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
propo: any = "propo";
loge: any = "loge";
equipe: any = "equipe";
actu: any = "actu";
nouscontacter: any = "nouscontacter";
tableau = [
  {
    id: 0,
    valeur: "accueil",
    display: "Accueil",
    color: "#a04134"
  },
  {
    id: 1,
    valeur: "propo",
    display: "A propos",
    color: "#initial"
  },
  {
    id: 2,
    valeur: "loge",
    display: "Loges",
    color: "initial"
  },
  {
    id: 3,
    valeur: "equipe",
    display: "Equipes",
    color: "initial"
  },
  {
    id: 4,
    valeur: "actu",
    display: "Témoignages",
    color: "initial"
  },
  {
    id: 5,
    valeur: "nouscontacter",
    display: "Nous contacter",
    color: "initial"
  },
]
  couleur: any;
  val!: string;

  scroll() {
    scrollTo(0, 0)
  }

  ngOnInit(): void {
  }
  changerCouleur(id: any) {
    this.tableau.find(ele => ele.id == id)?.color == "#a04134";
    this.tableau.forEach(tab => {
      tab.color = "initial";
      if (tab.id == id) {
        tab.color = "#a04134";
      }
    });
  }

 }
