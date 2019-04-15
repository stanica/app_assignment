import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatSidenav } from '@angular/material';

import { I18nService } from '@app/core';
import { StateService } from '@app/core/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  page = '';
  hasPreviousPage = false;

  constructor(
    private titleService: Title,
    private i18nService: I18nService,
    private location: Location,
    private state: StateService
  ) {}

  ngOnInit() {
    if (this.state) {
      this.state.getPage().subscribe(page => {
        this.page = page;
      });
      this.state.getPreviousPage().subscribe(state => {
        this.hasPreviousPage = state;
      });
    }
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  goBack() {
    this.location.back();
  }
}
