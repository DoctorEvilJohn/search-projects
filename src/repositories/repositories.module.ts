import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

// components
import * as components from './components';

// containers
import * as containers from './containers';

// services
import * as services from './services';

// pipes
import * as pipes from './pipes';

// directives
import * as fromDirectives from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [...components.components, ...containers.containers, ...pipes.pipes, ...fromDirectives.directives],
  exports: [...components.components, ...containers.containers],
  providers: [...services.services]
})

export class RepositoriesModule {}
