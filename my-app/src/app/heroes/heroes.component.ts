import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  lightTeam = [];
  darkTeam = [];
  mercenaryTeam = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes,
        this.lightTeam = this.heroes.filter(hero => hero.team.name == 'Ligth Team');
        this.darkTeam = this.heroes.filter(hero => hero.team.name == 'Dark Team');
        this.mercenaryTeam = this.heroes.filter(hero => hero.team.name == 'Wings og Liberty');
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  updateFavorite(hero: Hero): void {
    if (hero.isFavorite == false) {
      hero.isFavorite = true;
    } else {
      hero.isFavorite = false;
    }
    this.heroService.updateHero(hero).subscribe();
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
