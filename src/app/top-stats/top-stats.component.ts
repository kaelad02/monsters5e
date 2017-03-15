import { Component, OnInit } from '@angular/core';
import { PropertyLineComponent } from '../property-line/property-line.component';

@Component({
  selector: 'top-stats',
  templateUrl: './top-stats.component.html',
  styleUrls: ['./top-stats.component.css']
})
export class TopStatsComponent implements OnInit {

  constructor(/*private props: PropertyLineComponent*/) { }

  ngOnInit() {
  }

}
