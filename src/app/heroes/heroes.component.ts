import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../HEROS';
import {HeroService} from '../hero.service';

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

  heroes: Hero[];
  selectedHero: Hero;

  // 2. 서비스를 생성자로 등록하기
  constructor(private heroService: HeroService) {
  //   this.hero.id = 104;
  //   this.hero.name = 'RYUPE';

  }

  ngOnInit() {
    // Call Service
    // 잘못된 예시 - 컴포넌트와 서비스간 의존성 발생
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(data =>{
        this.heroes = data;
      });

  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;

    // this.selectedHero = hero;
  }

}
