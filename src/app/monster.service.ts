import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { MONSTERS } from './mock-monsters';

@Injectable()
export class MonsterService {

  constructor() { }

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
