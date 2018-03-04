import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushComponent } from './push/push.component';
import { PushService } from './services/push.service';

@NgModule({
  declarations: [
    AppComponent,
    PushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PushService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
