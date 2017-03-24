export class Monster {
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;

  // abilityScores: AbilityScores;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  // savingThrows: SavingThrows;
  strength_save?: number;
  dexterity_save?: number;
  constitution_save?: number;
  intelligence_save?: number;
  wisdom_save?: number;
  charisma_save?: number;

  // skillModifiers: [string, number][];
  acrobatics?: number;
  animal_handling?: number;
  arcana?: number;
  athletics?: number;
  deception?: number;
  history?: number;
  insight?: number;
  intimidation?: number;
  investigation?: number;
  medicine?: number;
  nature?: number;
  perception?: number;
  performance?: number;
  persuasion?: number;
  religion?: number;
  sleight_of_hand?: number;
  stealth?: number;
  survival?: number;

  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;

  special_abilities: SpecialAbility[];

  actions: Action[];

  reactions?: Action[];

  legendary_actions?: Action[];

  getAbilityScores(): AbilityScores {
    return new AbilityScores(this.strength, this.dexterity, this.constitution,
      this.intelligence, this.wisdom, this.charisma);
  }

  getSavingThrows(): SavingThrows {
    return new SavingThrows(this.strength_save, this.dexterity_save,
      this.constitution_save, this.intelligence_save, this.wisdom_save,
      this.charisma_save);
  }

  getSkillModifiers(): [string, number][] {
    let skills: [string, number][];
    if (this.acrobatics) {
      skills.push([ 'acrobatics', this.acrobatics ])
    }
    if (this.animal_handling) {
      skills.push([ 'animal_handling', this.animal_handling ]);
    }
    if (this.arcana) {
      skills.push([ 'arcana', this.arcana ]);
    }
    if (this.athletics) {
      skills.push([ 'athletics', this.athletics ]);
    }
    if (this.deception) {
      skills.push([ 'deception', this.deception ]);
    }
    if (this.history) {
      skills.push([ 'history', this.history ]);
    }
    if (this.insight) {
      skills.push([ 'insight', this.insight ]);
    }
    if (this.intimidation) {
      skills.push([ 'intimidation', this.intimidation ]);
    }
    if (this.investigation) {
      skills.push([ 'investigation', this.investigation ]);
    }
    if (this.medicine) {
      skills.push([ 'medicine', this.medicine ]);
    }
    if (this.nature) {
      skills.push([ 'nature', this.nature ]);
    }
    if (this.perception) {
      skills.push([ 'perception', this.perception ]);
    }
    if (this.performance) {
      skills.push([ 'performance', this.performance ]);
    }
    if (this.persuasion) {
      skills.push([ 'persuasion', this.persuasion ]);
    }
    if (this.religion) {
      skills.push([ 'religion', this.religion ]);
    }
    if (this.sleight_of_hand) {
      skills.push([ 'sleight_of_hand', this.sleight_of_hand ]);
    }
    if (this.stealth) {
      skills.push([ 'stealth', this.stealth ]);
    }
    if (this.survival) {
      skills.push([ 'survival', this.survival ]);
    }
    return skills;
  }
}

export class AbilityScores {
  private scores: number[];

  constructor(str: number, dex: number, con: number, int: number, wis: number,
    cha: number) {
    this.scores = [ str, dex, con, int, wis, cha ];
  }

  getScore(ability: Ability): number {
    return this.scores[ability];
  }

  getModifier(ability: Ability): number {
    let mod = this.scores[ability];
    mod = (mod - 10) / 2;
    mod = Math.floor(mod);
    return mod;
  }
}

export class SavingThrows {
  private mod: number[];

  constructor(str: number, dex: number, con: number, int: number, wis: number,
    cha: number) {
    this.mod = [ str, dex, con, int, wis, cha ];
  }

  getModifier(ability: Ability): number {
    return this.mod[ability];
  }
}

export enum Ability {
  STR, DEX, CON, INT, WIS, CHA
}

export class SpecialAbility {
  name: string;
  desc: string;
  attack_bonus: number;
}

export class Action extends SpecialAbility {
  damage_dice?: string;
  damage_bonus?: number;
}
