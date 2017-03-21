import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-italics',
  templateUrl: './p-italics.component.html',
  styleUrls: ['./p-italics.component.css']
})
export class PItalicsComponent {
  private htmlSnippet: string;

  private static readonly italics: string[] = [
    'Melee or Ranged Weapon Attack:',
    'Melee Weapon Attack:',
    'Ranged Weapon Attack:',
    'Hit:'
  ];

  @Input()
  set desc(desc: string) {

    for (let s of PItalicsComponent.italics) {
      let index = desc.indexOf(s);
      // if found, and not already wrapped in <i>
      if (index >= 0 && desc.indexOf('</i>', index + s.length) != (index + s.length)) {
        let beginning = desc.slice(0, index);
        let middle = '<i>' + s + '</i>';
        let end = desc.slice(index + s.length);
        desc = beginning + middle + end;
      }
    }

    this.htmlSnippet = desc;
  }

}
