import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TachesComponent } from './taches/taches.component';
import { StocksComponent } from './stocks/stocks.component';
import { ParcAutoComponent } from './parc-auto/parc-auto.component';

import { VentesComponent } from './ventes/ventes.component';
import { ProfilsComponent } from './profils/profils.component';
import { GestionDevisComponent } from './gestion-devis/gestion-devis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    TachesComponent,
    StocksComponent,
    ParcAutoComponent,
   
    VentesComponent,
   
    ProfilsComponent,
   
    GestionDevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
