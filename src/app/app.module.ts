import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Angular CLI importe directement notre composant
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AffichageListeFilmsComponent } from './affichage-liste-films/affichage-liste-films.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    // Avant de le déclarer obligatoirement comme module
    ListeFilmsComponent,
    AffichageListeFilmsComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
