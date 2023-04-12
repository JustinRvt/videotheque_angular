// Je créé un service, il va nous être utile pour regrouper les échanges entre l'utilisateur et le serveur sur notre liste de films. Les composants concernés utiliseront tous la même API / Base de données

import { Injectable } from "@angular/core";
import { Film } from "../models/liste-films.model" 

// Pour déclarer un service (qui est une classe) on utilise un nouveau décorateur : @Injectable fourni par le coeur d'Angular

@Injectable({
    // Pour lancer une seule instance de notre service, on va l'appeler à la racine
    providedIn: 'root'
})

// Pour pour l'utiliser (et donc l'importer) depuis nos composants, on exporte sa classe
export class ListeFilmsService{
    // Les services n'étant pas instanciés de la même façon que les composants, on déclare puis on initialise sans ngOnInit()
    listeFilms: Film[] = [
        {
            "titre" : "13: Game of Death",
            "realisateur" : "Chookiat Sakveerakul",
            "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
            "dureeTotale" : 114,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/13_game_of_death.jpg"
          },
          {
            "titre" : "Alien",
            "realisateur" : "Ridley Scott",
            "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
            "dureeTotale" : 117,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/alien.jpg"
          },
          {
            "titre" : "Magnolia",
            "realisateur" : "Paul Thomas Anderson",
            "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
            "dureeTotale" : 188,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/magnolia.jpg"
          },
          {
            "titre" : "Donnie Darko",
            "realisateur" : "Richard Kelly",
            "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
            "dureeTotale" : 113,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/donnie_darko.jpg"
          },
          {
            "titre" : "Dobermann",
            "realisateur" : "Jan Kounen",
            "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
            "dureeTotale" : 94,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/dobermann.jpg"
          },
          {
            "titre" : "Starship Troopers",
            "realisateur" : "Paul Verhoeven",
            "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
            "dureeTotale" : 129,
            "dureeVisionnee" : 72,
            "imgUrl" : "assets/img/affiches_films/starship_troopers.jpg"
          }
    ]
}