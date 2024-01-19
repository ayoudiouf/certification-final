import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import { DashChefpedagogiqueComponent } from './dashboards/dash-chefpedagogique/dash-chefpedagogique.component';
import { DashChefpavionComponent } from './dashboards/dash-chefpavion/dash-chefpavion.component';
import { DashEtudiantComponent } from './dashboards/dash-etudiant/dash-etudiant.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { AcueilComponent } from './composants/acueil/acueil.component';
import { AproposComponent } from './composants/apropos/apropos.component';
import { ActualiteComponent } from './composants/actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';
import { PolitiqueDeConfidentialiteComponent } from './composants/politique-de-confidentialite/politique-de-confidentialite.component';



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
    AproposComponent,
    ActualiteComponent,
    ContactComponent,
    PolitiqueDeConfidentialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
