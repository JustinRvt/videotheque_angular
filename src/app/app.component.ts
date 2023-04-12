import { Component, OnInit } from '@angular/core';
// import { Film } from './models/liste-films.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// J'ai besoin d'implémenter OnInit pour alimenter notre composant à chaque nouvelle instance
export class AppComponent implements OnInit {
  title = 'Ma videothèque';
  // je crée une propriété liste film liée à ma class Film (model) sous forme de tableau
//   listeFilms!: Film[];
  // film2! : Film;
  // film3! : Film;

  // On lancement de l'application
  ngOnInit(): void {
    // this.listeFilms = [
    //   {
    //     "titre" : "13: Game of Death",
    //     "realisateur" : "Chookiat Sakveerakul",
    //     "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
    //     "dureeTotale" : 114,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/13_game_of_death.jpg"
    //   },
    //   {
    //     "titre" : "Alien",
    //     "realisateur" : "Ridley Scott",
    //     "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    //     "dureeTotale" : 117,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/alien.jpg"
    //   },
    //   {
    //     "titre" : "Magnolia",
    //     "realisateur" : "Paul Thomas Anderson",
    //     "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
    //     "dureeTotale" : 188,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/magnolia.jpg"
    //   },
    //   {
    //     "titre" : "Donnie Darko",
    //     "realisateur" : "Richard Kelly",
    //     "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
    //     "dureeTotale" : 113,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/donnie_darko.jpg"
    //   },
    //   {
    //     "titre" : "Dobermann",
    //     "realisateur" : "Jan Kounen",
    //     "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
    //     "dureeTotale" : 94,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/dobermann.jpg"
    //   },
    //   {
    //     "titre" : "Starship Troopers",
    //     "realisateur" : "Paul Verhoeven",
    //     "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
    //     "dureeTotale" : 129,
    //     "dureeVisionnee" : 72,
    //     "imgUrl" : "assets/img/affiches_films/starship_troopers.jpg"
    //   }
    // ]
    // // On instancie un nouveu film
    // this.film1 = new Film(
    //   "13: Game of Death",
    //   "Chookiat Sakveerakul",
    //   "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
    //   114,
    //   75,
    //   "assets/img/affiches_films/13_game_of_death.jpg"
    // );
    // this.film2 = new Film(
    //   "Alien",
    //   "Ridley Scott",
    //   "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    //   117,
    //   117,
    //   "assets/img/affiches_films/alien.jpg"
    // );
    // this.film3 = new Film(
    //   "Magnolia",
    //   "Paul Thomas Anderson",
    //   "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
    //   188,
    //   188,
    //   "assets/img/affiches_films/magnolia.jpg"
    // );
  }
}
