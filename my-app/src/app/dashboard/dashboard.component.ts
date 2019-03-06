import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = [];

constructor(private heroService: HeroService) { }

//panel options
lightPanelOpenState = true;
darkPanelOpenState = true;
mercernaryPanelOpenState = true;

//datas
lightTeam = [];
darkTeam = [];
mercenaryTeam = [];

ngOnInit() {
  this.getHeroes();
}

getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(
      heroes => {
        this.heroes = heroes.filter(hero => hero.isFavorite == true)
        this.lightTeam = this.heroes.filter(hero => hero.team.name == 'Ligth Team');
        this.darkTeam = this.heroes.filter(hero => hero.team.name == 'Dark Team');
        this.mercenaryTeam = this.heroes.filter(hero => hero.team.name == 'Wings og Liberty');
      });
  }
}