import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'property-line',
  templateUrl: './property-line.component.html',
  styleUrls: ['./property-line.component.css']
})
export class PropertyLineComponent implements OnInit {
  @Input() name: string;
  @Input() desc: string;

  constructor() { }

  ngOnInit() {
  }

}
