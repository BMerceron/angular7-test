import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-favorite',
  templateUrl: './hero-favorite.component.html',
  styleUrls: ['./hero-favorite.component.scss']
})
export class HeroFavoriteComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  updateFavorite(hero: Hero): void {
    if (hero.isFavorite == false) {
      hero.isFavorite = true;
    } else {
      hero.isFavorite = false;
    }
    this.heroService.updateHero(hero).subscribe();
  }
}
