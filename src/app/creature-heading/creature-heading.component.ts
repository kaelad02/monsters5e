import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'creature-heading',
  templateUrl: './creature-heading.component.html',
  styleUrls: ['./creature-heading.component.css']
})
export class CreatureHeadingComponent implements OnInit {
  @Input() name: string;
  @Input() size: string;
  @Input() type: string;
  @Input() subtype: string;
  @Input() alignment: string;

  constructor() { }

  ngOnInit() {
  }

}
