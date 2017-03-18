import { Injectable } from '@angular/core';
import { Monster } from './monster';

@Injectable()
export class MonsterService {

  constructor() { }

  getNames(): string[] {
    return null;
  }

  getMonster(name: string): Monster {
    return null;
  }

}
