import { Component, OnInit } from '@angular/core';
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
    this.names = this.monsterService.getNames();
  }

  onSelect(): void {
    selectedMonster => this.monsterService.getMonster(this.selectedName);
  }
}
