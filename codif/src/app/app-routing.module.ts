import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './dashboards/part-admins/admin/dashbord.component';
import { AcueilComponent } from './composants/acueil/acueil.component';
import { DashChefpavionComponent } from './dashboards/part-chefpavion/dash-chefpavion/dash-chefpavion.component';
import { DashChefpedagogiqueComponent } from './dashboards/part-chefpedagogique/dash-chefpedagogique/dash-chefpedagogique.component';
import { DashEtudiantComponent } from './dashboards/part-etudiant/dash-etudiant/dash-etudiant.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { PaiementComponent } from './dashboards/part-admins/paiement/paiement.component';

const routes: Routes = [
  {path : 'acueil', component: AcueilComponent },
  {path : 'admin' , component: AdminComponent},
  {path : 'chefpavion', component: DashChefpavionComponent},
  {path : 'chefpedagogie', component: DashChefpedagogiqueComponent},
  {path : 'etudiant' , component: DashEtudiantComponent},
  {path : 'sidebar' , component: SitebarComponent},
  {path : 'paiement' , component: PaiementComponent},
  {path : '' , redirectTo:'acueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
