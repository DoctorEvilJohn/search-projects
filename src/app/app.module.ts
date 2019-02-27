import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RepositoriesModule} from '../repositories/repositories.module';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RepositoriesModule
  ],
  providers: [
    [{provide: APP_BASE_HREF, useValue: '/'}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
