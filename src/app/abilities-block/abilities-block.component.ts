import { Component, OnInit, Inject, Input } from '@angular/core';
import { AbilityScores, Ability } from '../monster';

@Component({
  selector: 'abilities-block',
  templateUrl: './abilities-block.component.html',
  styleUrls: ['./abilities-block.component.css']
})
export class AbilitiesBlockComponent implements OnInit {
  @Input() abilityScores: AbilityScores;

  private readonly abilities: number[];
  private readonly labels: string[];

  constructor() {
    /*
    * Enums are transpiled into tuples of their number and string values in both
    * directions. For example:
    * [0, "first"], [1, "second"], ["first", 0], ["second", 1]
    * The first transformation pulls out the first part of the tuple. The second
    * keeps the first half (the numbers). Finally, it's transformed into a
    * number array.
    */
    let abilities = Object.keys(Ability);
    abilities = abilities.slice(0, abilities.length / 2);
    this.abilities = abilities.map(function(n){
      return Number(n);
    });

    abilities = Object.keys(Ability);
    this.labels = abilities.slice(abilities.length / 2);
  }

  ngOnInit() {
  }

  getModifier(ability: Ability): string {
    let modifier = this.abilityScores.getModifier(ability);
    if(modifier >= 0) {
      return "+" + modifier;
    }
    // use an en dash, not a normal dash to make it more visible
    return "–" + Math.abs(modifier);
  }

}
