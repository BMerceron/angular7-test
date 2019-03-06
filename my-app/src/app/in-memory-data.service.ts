import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero} from './models/hero';
import { Players } from './models/players';
import { Caracs} from './models/caracs';
import { Teams } from './models/teams';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 1, name: 'Ligth Team', type: "good" },
      { id: 2, name: 'Dark Team', type: "bad" },
      { id: 3, name: 'Wings og Liberty', type: "mercenary" },
    ];

    const players = [
      { id: 1, name: 'user01', password: "password", team: teams },
    ];

    const caracs = [
      { id: 1, name:"tank", health: 60, damages: 5, heal: 0 },
      { id: 2, name:"soldier", health: 40, damages: 20, heal: 0 },
      { id: 2, name:"soldier", health: 30, damages: 5, heal: 10 },
    ]

    const heroes = [
      { id: 11, name: 'Mr. Nice', isFavorite: false, caracs: caracs[1], team: teams[0] },
      { id: 12, name: 'Narco', isFavorite: false, caracs: caracs[1], team: teams[1] },
      { id: 13, name: 'Bombasto', isFavorite: false, caracs: caracs[1], team: teams[2] },
      { id: 14, name: 'Celeritas', isFavorite: false, caracs: caracs[2], team: teams[0] },
      { id: 15, name: 'Magneta', isFavorite: false, caracs: caracs[2], team: teams[1] },
      { id: 16, name: 'RubberMan', isFavorite: false, caracs: caracs[2], team: teams[2] },
      { id: 17, name: 'Dynama', isFavorite: false, caracs: caracs[3], team: teams[0] },
      { id: 18, name: 'Dr IQ', isFavorite: false, caracs: caracs[3], team: teams[2] },
      { id: 19, name: 'Magma', isFavorite: false, caracs: caracs[3], team: teams[1] },
      { id: 20, name: 'Guldan', isFavorite: false, caracs: caracs[2], team: teams[1] },
      { id: 21, name: 'Bison', isFavorite: false, caracs: caracs[2], team: teams[1] },
      { id: 22, name: 'Uther', isFavorite: false, caracs: caracs[2], team: teams[0] },
      { id: 23, name: 'John J Keeshan', isFavorite: false, caracs: caracs[2], team: teams[2] },
      { id: 24, name: 'Ryu', isFavorite: false, caracs: caracs[2], team: teams[2] },
      { id: 25, name: 'Gilles', isFavorite: false, caracs: caracs[2], team: teams[0] }
    ];
    return {heroes, teams, caracs, players};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genIdGenerator(type){
    return type.length > 0 ? Math.max(...type.map(type => type.id)) + 1 : 11;
  }
    
  genId(heroes: Hero[]) {
    this.genIdGenerator(heroes);
    console.log("Heroes");
  }
}