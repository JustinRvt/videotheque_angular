import { Component, OnInit } from '@angular/core';
import { Film } from "../models/liste-films.model";
import { ListeFilmsService } from '../services/liste-films.service';

@Component({
  selector: 'app-affichage-liste-films',
  templateUrl: './affichage-liste-films.component.html',
  styleUrls: ['./affichage-liste-films.component.css']
})

export class AffichageListeFilmsComponent implements OnInit {
    listeFilms!: Film[];

    // Nous avons besoin d'un constructeur qui appelle notre service
    constructor(private listeFilmsService: ListeFilmsService){}

    ngOnInit(): void {
        this.listeFilms = this.listeFilmsService.listeFilms;
        
    }
}
