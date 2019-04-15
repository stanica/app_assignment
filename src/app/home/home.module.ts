import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieService } from '../core/services/movie.service';
import { StateService } from '@app/core/services/state.service';
import { ScrollEventModule } from 'ngx-scroll-event';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    ScrollEventModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  providers: [MovieService, StateService]
})
export class HomeModule {}
