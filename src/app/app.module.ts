import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DcAComponent } from './dc-a/dc-a.component';
import { BlueprintDirective } from './dynamic-component/blueprint.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    DynamicComponentComponent,
    DcAComponent,
    BlueprintDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    DcAComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
