import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { DetailsRoutingModule } from './details-routing.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

import { MovieService } from '../core/services/movie.service';
import { StateService } from '../core/services/state.service';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    DetailsRoutingModule,
    RouterModule
  ],
  providers: [MovieService, StateService]
})
export class DetailsModule {}
