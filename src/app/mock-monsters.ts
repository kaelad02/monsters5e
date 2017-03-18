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
  }
];
