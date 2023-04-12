// J'importe input en plus de component
import { Component, Input } from '@angular/core';
// J'importe mon model Film
import { Film } from '../models/liste-films.model'

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css'], 
})
// Nous avons une classe film à instancier
export class ListeFilmsComponent {

  // Nous avons besoin d'injecter nos propriétés depuis l'extérieur de ce composant.
  // Pour cela, nous avons besoin d'un nouveau décorateur : @Input() qui va autoriser cela en faisant la liason avec notre model
  @Input() instanceFilm!: Film;

  // // on place un bang ! pour dire à Angular que l'on va initialiser notre variable plus tard
  // // de même que l'on définit son type
  // titre!: string;
  // realisateur!: string;
  // description!: string;
  // dureeTotale!: number;
  // dureeVisionnee!: number;
  // imgUrl!: string;
  // // en utilisant la méthode ngOnInit() qui sera lancée par Angular à chaque création d'instance du composant
  // ngOnInit() {
  //   this.titre = '13: Game of Death';
  //   this.realisateur = 'Chookiat Sakveerakul';
  //   this.description ="After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion."
  //   this.dureeTotale = 114;
  //   this.dureeVisionnee = 75;
  //   this.imgUrl = "assets/img/affiches_films/13_game_of_death.jpg"
  // }
}

// Les propriétés d'un composant sont déclarées en haut de classe et initialisés dans ngOnInit() qui est appelée à chaque création d'instance.