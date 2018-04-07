import { Component, OnInit } from '@angular/core';
import {Hero} from '../hear';

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

 hero = new Hero();

  constructor() {
    this.hero.id = 104;
    this.hero.name = 'RYUPE';
  }

  ngOnInit() {

  }

}
