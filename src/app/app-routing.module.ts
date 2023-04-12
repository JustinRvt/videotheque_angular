// Je crée un fichier app-routing.module.ts à la base app

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AffichageListeFilmsComponent } from "./affichage-liste-films/affichage-liste-films.component";
import { AccueilComponent } from "./accueil/accueil.component";


const routes : Routes = [
    // je crée mon 1er chemin au sein d'un objet
    {
        // l'URL
        path : 'videotheque',
        // Son composant !
        component: AffichageListeFilmsComponent
    },
    {
        // Pour la page d'accueil, on laisse le chemin vide
        path: '',
        component: AccueilComponent
    }
];
// 1er étape : je déclare ma classe avec un nouveau décorateur : @NgModule()
@NgModule({
    // nous spécifions au framework que les routes écrites ici seront exécutées à la racine de notre application
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{}

// 2ème étape : j'ai besoin d'un tableau qui va contenir mes routes, j'initialise donc une constante au dessus de ma classe. Ce dernier va nous permettre de faire la liaison entre composants et URL