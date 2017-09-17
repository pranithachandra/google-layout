import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import 'hammerjs';
import { ImagesliderComponent } from './imageslider/imageslider.component';
var $:any;
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ImagesliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CarouselamosModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent,ImagesliderComponent]
})
export class AppModule {}
