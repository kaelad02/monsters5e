import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { MONSTERS } from './mock-monsters';

@Injectable()
export class MonsterService {

  constructor() { }

  /*
  * consider switching to Async pattern with Promises
  * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#async-services-and-_promise-s
  */

  getNames(): string[] {
    return MONSTERS.map(function(monster) {
      return monster.name;
    });
  }

  getMonster(name: string): Monster {
    return MONSTERS.find(function(monster){
      return name == monster.name;
    });
  }

}
