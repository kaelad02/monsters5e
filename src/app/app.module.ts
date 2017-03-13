import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { CreatureHeadingComponent } from './creature-heading/creature-heading.component';
import { PropertyLineComponent } from './property-line/property-line.component';

@NgModule({
  declarations: [
    AppComponent,
    StatBlockComponent,
    CreatureHeadingComponent,
    PropertyLineComponent
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
