import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TachesComponent } from './taches/taches.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { StocksComponent } from './stocks/stocks.component';
import { ParcAutoComponent } from './parc-auto/parc-auto.component';
import { VentesComponent } from './ventes/ventes.component';
import { ProfilsComponent } from './profils/profils.component';
import { GestionDevisComponent } from './gestion-devis/gestion-devis.component';
import { CreationClientComponent } from './creation-client/creation-client.component';
import { ListeDevisComponent } from './liste-devis/liste-devis.component';



const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'taches', component: TachesComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'parc_auto', component: ParcAutoComponent},
  {path: 'ventes', component: VentesComponent},
  {path:'profils', component: ProfilsComponent},
  {path: 'devis', component:GestionDevisComponent},
  {path: 'creation_client', component: CreationClientComponent},
  {path: 'liste_devis', component: ListeDevisComponent},
  {path: '', pathMatch: 'full', redirectTo:'acceuil'},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
