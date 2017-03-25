import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MonsterService } from './monster.service';
import { Monster } from './monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MonsterService ]
})
export class AppComponent implements OnInit {
  names: string[];
  selectedName: string;
  selectedMonster: Monster;

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.getMonsterNames();
  }

  getMonsterNames(): void {
    this.monsterService.getNames()
      .subscribe(names => this.names = names);
  }

  onSelect(): void {
    if (this.selectedName) {
      this.monsterService.getMonster(this.selectedName)
        .subscribe(monster => this.selectedMonster = monster);
    }
  }
}
