import { Component, OnInit, Input } from '@angular/core';
import { Monster, AbilityScores, SavingThrows } from '../monster';

@Component({
  selector: 'stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent implements OnInit {
  @Input() monster: Monster;

  constructor() { }

  ngOnInit() {
  }

  getAbilityScores(): AbilityScores {
    return new AbilityScores(this.monster.strength, this.monster.dexterity, this.monster.constitution,
      this.monster.intelligence, this.monster.wisdom, this.monster.charisma);
  }

  getSavingThrows(): SavingThrows {
    return new SavingThrows(this.monster.strength_save, this.monster.dexterity_save,
      this.monster.constitution_save, this.monster.intelligence_save, this.monster.wisdom_save,
      this.monster.charisma_save);
  }

  getSkillModifiers(): [string, number][] {
    let skills: [string, number][] = new Array<[string, number]>();
    if (this.monster.acrobatics) {
      skills.push([ 'acrobatics', this.monster.acrobatics ])
    }
    if (this.monster.animal_handling) {
      skills.push([ 'animal_handling', this.monster.animal_handling ]);
    }
    if (this.monster.arcana) {
      skills.push([ 'arcana', this.monster.arcana ]);
    }
    if (this.monster.athletics) {
      skills.push([ 'athletics', this.monster.athletics ]);
    }
    if (this.monster.deception) {
      skills.push([ 'deception', this.monster.deception ]);
    }
    if (this.monster.history) {
      skills.push([ 'history', this.monster.history ]);
    }
    if (this.monster.insight) {
      skills.push([ 'insight', this.monster.insight ]);
    }
    if (this.monster.intimidation) {
      skills.push([ 'intimidation', this.monster.intimidation ]);
    }
    if (this.monster.investigation) {
      skills.push([ 'investigation', this.monster.investigation ]);
    }
    if (this.monster.medicine) {
      skills.push([ 'medicine', this.monster.medicine ]);
    }
    if (this.monster.nature) {
      skills.push([ 'nature', this.monster.nature ]);
    }
    if (this.monster.perception) {
      skills.push([ 'perception', this.monster.perception ]);
    }
    if (this.monster.performance) {
      skills.push([ 'performance', this.monster.performance ]);
    }
    if (this.monster.persuasion) {
      skills.push([ 'persuasion', this.monster.persuasion ]);
    }
    if (this.monster.religion) {
      skills.push([ 'religion', this.monster.religion ]);
    }
    if (this.monster.sleight_of_hand) {
      skills.push([ 'sleight_of_hand', this.monster.sleight_of_hand ]);
    }
    if (this.monster.stealth) {
      skills.push([ 'stealth', this.monster.stealth ]);
    }
    if (this.monster.survival) {
      skills.push([ 'survival', this.monster.survival ]);
    }
    return skills;
  }

}
