import { Monster, AbilityScores, SavingThrows, SpecialAbility, Action } from './monster';

export const MONSTERS: Monster[] = [
  {
    name: 'Animated Armor',
    size: 'Medium',
    type: 'construct',
    subtype: null,
    alignment: 'unaligned',
    armor_class: 18,
    hit_points: 33,
    hit_dice: '6d8',
    speed: '25 ft.',
    abilityScores: new AbilityScores(14, 11, 13, 1, 3, 1),
    savingThrows: new SavingThrows(null, null, null, null, null, null),
    skillModifiers: null,
    damage_vulnerabilities: null,
    damage_resistances: null,
    damage_immunities: 'poison, psychic',
    condition_immunities: 'blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned',
    senses: 'blindsight 60 ft. (blind beyond this radius), passive Perception 6',
    languages: null,
    challenge_rating: '1',
    special_abilities: [
      {
        name: 'Antimagic Susceptibility',
        desc: 'The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster\'s spell save DC or fall unconscious for 1 minute.'
      },
      {
        name: 'False Appearance',
        desc: 'While the armor remains motionless, it is indistinguishable from a normal suit of armor.'
      }
    ],
    actions: [
      {
        name: 'Multiattack',
        desc: 'The armor makes two melee attacks.',
        attack_bonus: null,
        damage_dice: null,
        damage_bonus: null
      },
      {
        name: 'Slam',
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.',
        attack_bonus: 4,
        damage_dice: '1d6',
        damage_bonus: 2
      }
    ],
    legendary_actions: null
  },
  {
    name: 'Sahuagin',
    size: 'Medium',
    type: 'humanoid',
    subtype: 'sahuagin',
    alignment: 'lawful evil',
    armor_class: 12,
    hit_points: 22,
    hit_dice: '4d8',
    speed: '30 ft., swim 40 ft.',
    abilityScores: new AbilityScores(13, 11, 12, 12, 13, 9),
    savingThrows: new SavingThrows(null, null, null, null, null, null),
    skillModifiers: [
      ['perception', 5]
    ],
    damage_vulnerabilities: null,
    damage_resistances: null,
    damage_immunities: null,
    condition_immunities: null,
    senses: 'darkvision 120 ft., passive Perception 15',
    languages: 'Sahuagin',
    challenge_rating: '1/2',
    special_abilities: [
      {
        name: 'Blood Frenzy',
        desc: 'The sahuagin has advantage on melee attack rolls against any creature that doesn\'t have all its hit points.'
      },
      {
        name: 'Limited Amphibiousness',
        desc: 'The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.'
      },
      {
        name: 'Shark Telepathy',
        desc: 'The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.'
      }
    ],
    actions: [
      {
        name: 'Multiattack',
        desc: 'The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.',
        attack_bonus: null,
        damage_dice: null,
        damage_bonus: null
      },
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.',
        attack_bonus: 3,
        damage_dice: '1d4',
        damage_bonus: 1
      },
      {
        name: 'Claws',
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.',
        attack_bonus: 3,
        damage_dice: '1d4',
        damage_bonus: 1
      },
      {
        name: 'Spear',
        desc: 'Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.',
        attack_bonus: 3,
        damage_dice: '1d6',
        damage_bonus: 1
      }
    ],
    legendary_actions: null
  }
];
