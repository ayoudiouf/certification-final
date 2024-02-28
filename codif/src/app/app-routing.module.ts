import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
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
import { PolitiqueDeConfidentialiteComponent } from './composants/politique-de-confidentialite/politique-de-confidentialite.component';
import { SidebaretudiantComponent } from './sidebaretudiant/sidebaretudiant.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';

import { EtudiantpayeComponent } from './dashboards/part-etudiant/etudiantpaye/etudiantpaye.component';
import { DemandereclamationComponent } from './dashboards/part-etudiant/demandereclamation/demandereclamation.component';
import { ChambreComponent } from './dashboards/part-admins/chambre/chambre.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AuthGuard } from './gards/guard-route.guard';
import { DashResponsableComponent } from './dashboards/part-responsable/dash-responsable/dash-responsable.component';
import { EtudiantcassocialComponent } from './dashboards/part-responsable/etudiantcassocial/etudiantcassocial.component';
import { RoleComponent } from './dashboards/part-admins/role/role.component';
import { BeneficiaireComponent } from './dashboards/part-admins/beneficiaire/beneficiaire.component';


const routes: Routes = [
  // CanActivate:[/login];
  // canActivate: [AuthGuard]
  {path : '' , redirectTo:'acueil', pathMatch:'full'},
  {path : 'acueil', component: AcueilComponent},
  {path : 'admin' , component: AdminComponent, canActivate: [AuthGuard]},
  {path : 'confidentialite' , component: PolitiqueDeConfidentialiteComponent, canActivate: [AuthGuard]},
  {path : 'chefpavion', component: DashChefpavionComponent, canActivate: [AuthGuard]},
  // {path : 'admin', component: AdminComponent},
  {path : 'chefpedagogique', component: DashChefpedagogiqueComponent, canActivate: [AuthGuard]},
  {path : 'etudiant' , component: DashEtudiantComponent, canActivate: [AuthGuard]},
  {path : 'sidebar' , component: SitebarComponent, canActivate: [AuthGuard]},
  {path : 'paiement' , component: PaiementComponent, canActivate: [AuthGuard]},
  {path : 'pavion' , component: PavionComponent, canActivate: [AuthGuard]},
  {path : 'utilisateur' , component: UtilisateurComponent, canActivate: [AuthGuard]},
  {path : 'etudiantparmerite' , component: EtudiantParMeriteComponent, canActivate: [AuthGuard]},
  {path : 'cassocial' , component: CasSocialComponent, canActivate: [AuthGuard]},
  {path : 'gestionchambre' , component: GestionChambreComponent, canActivate: [AuthGuard]},
  {path : 'reclamation' , component: ReclamationComponent, canActivate: [AuthGuard]},
  {path : 'listechefpedagogique' , component: EtudiantsComponent, canActivate: [AuthGuard]},
  {path : 'etudiantsidebar' , component: SidebaretudiantComponent, canActivate: [AuthGuard]},
  {path : 'etudiantreclamation' , component: DemandereclamationComponent, canActivate: [AuthGuard]},
  {path : 'payeetudiant' , component: EtudiantpayeComponent, canActivate: [AuthGuard]},
  { path: 'dahresponsable', component: DashResponsableComponent, canActivate: [AuthGuard]},
  { path: 'role', component: RoleComponent, canActivate: [AuthGuard]},
  {path : 'listchambre' , component: ChambreComponent, canActivate: [AuthGuard]},
  {path : 'beneficiaire' , component: BeneficiaireComponent, canActivate: [AuthGuard]},
  {path : 'connexion' , component: ConnexionComponent},
  {path : 'listeEtudiantCasSos' , component: EtudiantcassocialComponent, canActivate: [AuthGuard]},
  {path : 'paiementetudiant' , component: PaiementComponent, canActivate: [AuthGuard]},

  { path: '**', component: MaintenanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
