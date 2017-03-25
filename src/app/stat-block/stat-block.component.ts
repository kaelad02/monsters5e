import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../monster';

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

}
