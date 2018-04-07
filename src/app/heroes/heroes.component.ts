import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../HEROS';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

 /* hero: Hero = {

    id: 104,
    name: 'ryupe'
  };*/

  // hero = new Hero();

  heroes = HEROS;
  selectedHero: Hero;

  constructor() {
  //   this.hero.id = 104;
  //   this.hero.name = 'RYUPE';
  }

  ngOnInit() {

  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;

    // this.selectedHero = hero;
  }

}
