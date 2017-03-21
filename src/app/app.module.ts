import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { CreatureHeadingComponent } from './creature-heading/creature-heading.component';
import { PropertyLineComponent } from './property-line/property-line.component';
import { AbilitiesBlockComponent } from './abilities-block/abilities-block.component';
import { TaperedRuleComponent } from './tapered-rule/tapered-rule.component';
import { TopStatsComponent } from './top-stats/top-stats.component';
import { PropertyBlockComponent } from './property-block/property-block.component';
import { PItalicsComponent } from './p-italics/p-italics.component';

@NgModule({
  declarations: [
    AppComponent,
    StatBlockComponent,
    CreatureHeadingComponent,
    PropertyLineComponent,
    AbilitiesBlockComponent,
    TaperedRuleComponent,
    TopStatsComponent,
    PropertyBlockComponent,
    PItalicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
