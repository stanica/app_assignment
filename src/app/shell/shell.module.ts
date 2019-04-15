import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

import { StateService } from '../core/services/state.service';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent],
  providers: [StateService]
})
export class ShellModule {}