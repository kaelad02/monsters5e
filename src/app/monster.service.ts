import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AbstractMonster, Monster } from './monster';

@Injectable()
export class MonsterService {

  private url = 'assets/5e-SRD-Monsters.json';

  constructor(private http: Http) { }

  private getMonsters(): Observable<AbstractMonster[]> {
    return this.http.get(this.url)
      .map(response => response.json() as AbstractMonster[])
      // remove the license at the end of the file
      .map(monsters => {
        monsters.pop();
        return monsters;
      });
  }

  getNames(): Observable<string[]> {
    return this.getMonsters()
      .map(monsters => monsters.map(m => m.name));
  }

  getMonster(name: string): Observable<Monster> {
    return this.getMonsters()
      .map(monsters => monsters.find(m => name == m.name))
      // need to copy into "real" class to get custom getter methods
      .map(monster => new Monster(monster));
  }

}
