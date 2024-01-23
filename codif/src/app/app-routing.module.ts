import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './dashboards/part-admins/admin/dashbord.component';
import { AcueilComponent } from './composants/acueil/acueil.component';
import { DashChefpavionComponent } from './dashboards/part-chefpavion/dash-chefpavion/dash-chefpavion.component';
import { DashChefpedagogiqueComponent } from './dashboards/part-chefpedagogique/dash-chefpedagogique/dash-chefpedagogique.component';
import { DashEtudiantComponent } from './dashboards/part-etudiant/dash-etudiant/dash-etudiant.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { PaiementComponent } from './dashboards/part-admins/paiement/paiement.component';
import { PavionComponent } from './dashboards/part-admins/pavion/pavion.component';
import { UtilisateurComponent } from './dashboards/part-admins/utilisateur/utilisateur.component';
import { CasSocialComponent } from './dashboards/part-admins/cas-social/cas-social.component';
import { EtudiantParMeriteComponent } from './dashboards/part-admins/etudiant-par-merite/etudiant-par-merite.component';
import { GestionChambreComponent } from './dashboards/part-chefpavion/gestion-chambre/gestion-chambre.component';
import { ReclamationComponent } from './dashboards/part-chefpavion/reclamation/reclamation.component';
import { EtudiantsComponent } from './dashboards/part-chefpedagogique/etudiants/etudiants.component';

const routes: Routes = [
  {path : 'acueil', component: AcueilComponent },
  {path : 'admin' , component: AdminComponent},
  {path : 'chefpavion', component: DashChefpavionComponent},
  {path : 'chefpedagogie', component: DashChefpedagogiqueComponent},
  {path : 'etudiant' , component: DashEtudiantComponent},
  {path : 'sidebar' , component: SitebarComponent},
  {path : 'paiement' , component: PaiementComponent},
  {path : 'pavion' , component: PavionComponent},
  {path : 'utilisateur' , component: UtilisateurComponent},
  {path : 'etudiantparmerite' , component: EtudiantParMeriteComponent},
  {path : 'cassocial' , component: CasSocialComponent},
  {path : 'gestionchambre' , component: GestionChambreComponent},
  {path : 'reclamation' , component: ReclamationComponent},
  {path : 'listechefpedagogique' , component: EtudiantsComponent},
  {path : '' , redirectTo:'acueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
