import { Injectable } from '@angular/core';
import {HEROS} from './HEROS';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }



  getHeroes(): Observable<Hero[]> {


    return of(HEROS);
  }

}
