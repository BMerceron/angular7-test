import { Teams } from "./teams";
import { Caracs } from "./caracs";

export class Hero {
    id : number;
    name : string;
    isFavorite: boolean;
    caracs: Caracs;
    team: Teams;
}