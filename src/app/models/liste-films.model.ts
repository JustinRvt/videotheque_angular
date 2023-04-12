// Je crée une classe générique de films qui servira de squelette
export class Film {
    // Nous utiliseront un constructeur
    constructor(
        // Typescript nous permet d'avoir une syntaxe plus lisible si nos propriétés seront bien toutes initialisées en rajoutant le modificateur public
        public titre: string,
        public realisateur : string,
        public description : string,
        public dureeTotale : number,
        public dureeVisionnee : number,
        public imgUrl : string
    ){}
}
