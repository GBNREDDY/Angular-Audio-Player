import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AudioListComponent } from './audio-list/audio-list.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { DataService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioListComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
