import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './dashboards/part-admins/admin/dashbord.component';
import { DashChefpedagogiqueComponent } from './dashboards/part-chefpedagogique/dash-chefpedagogique/dash-chefpedagogique.component';
import { DashChefpavionComponent } from './dashboards/part-chefpavion/dash-chefpavion/dash-chefpavion.component';
import { DashEtudiantComponent } from './dashboards/part-etudiant/dash-etudiant/dash-etudiant.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { AcueilComponent } from './composants/acueil/acueil.component';
import { PolitiqueDeConfidentialiteComponent } from './composants/politique-de-confidentialite/politique-de-confidentialite.component';
import { DataTablesModule } from 'angular-datatables';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { PaiementComponent } from './dashboards/part-admins/paiement/paiement.component';
import { UtilisateurComponent } from './dashboards/part-admins/utilisateur/utilisateur.component';
import { PavionComponent } from './dashboards/part-admins/pavion/pavion.component';
import { GestionChambreComponent } from './dashboards/part-chefpavion/gestion-chambre/gestion-chambre.component';
import { ReclamationComponent } from './dashboards/part-chefpavion/reclamation/reclamation.component';
import { EtudiantsComponent } from './dashboards/part-chefpedagogique/etudiants/etudiants.component';
import { CasSocialComponent } from './dashboards/part-admins/cas-social/cas-social.component';
import { EtudiantParMeriteComponent } from './dashboards/part-admins/etudiant-par-merite/etudiant-par-merite.component';
import { SidebarchefpavionComponent } from './sidebarchefpavion/sidebarchefpavion.component';
import { SidebarchefpedagogiqueComponent } from './sidebarchefpedagogique/sidebarchefpedagogique.component';
import { SidebaretudiantComponent } from './sidebaretudiant/sidebaretudiant.component';
import { DashProfesseurComponent } from './dashboards/part-professeur/dash-professeur/dash-professeur.component';
import { AjoutNotesComponent } from './dashboards/part-professeur/ajout-notes/ajout-notes.component';
import { SidebarprofesseurComponent } from './sidebarprofesseur/sidebarprofesseur.component';
import { DemandereclamationComponent } from './dashboards/part-etudiant/demandereclamation/demandereclamation.component';
import { EtudiantpayeComponent } from './dashboards/part-etudiant/etudiantpaye/etudiantpaye.component';
import { ChambreComponent } from './dashboards/part-admins/chambre/chambre.component';
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
// import { ConnexionComponent } from './dashboards/part-admins/admin/auth/connexion/connexion.component';
// import { InscriptionComponent } from './inscription/inscription.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashChefpedagogiqueComponent,
    DashChefpavionComponent,
    DashEtudiantComponent,
    SitebarComponent,
    HeaderComponent,
    FooterComponent,
    AcueilComponent,
    PolitiqueDeConfidentialiteComponent,
    HeaderSidebarComponent,
    PaiementComponent,
    UtilisateurComponent,
    PavionComponent,
    GestionChambreComponent,
    AjoutNotesComponent,
    ReclamationComponent,
    // ReclamationEtudiantComponent,
    EtudiantsComponent,
    CasSocialComponent,
    EtudiantParMeriteComponent,

    SidebarchefpavionComponent,
    SidebarchefpedagogiqueComponent,
    SidebaretudiantComponent,
    DashProfesseurComponent,
    AjoutNotesComponent,
    SidebarprofesseurComponent,
    DemandereclamationComponent,
    EtudiantpayeComponent,
    ChambreComponent,
    ChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
