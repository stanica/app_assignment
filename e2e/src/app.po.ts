/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by, ElementFinder } from 'protractor';

export class AppPage {
  constructor() {
    // Forces default language
    this.navigateToPopular();
    browser.executeScript(() => localStorage.setItem('language', 'en-US'));
  }

  navigateToPopular() {
    return browser.get('/');
  }

  navigateToTop() {
    return browser.get('/top');
  }

  getPopularPageTitle() {
    return element(by.css('app-root mat-toolbar span')).getText();
  }

  getTopPageTitle() {
    return element(by.css('app-root mat-toolbar span')).getText();
  }

  getFirstImage() {
    return element(by.id('image-0'));
  }

  clickImage(el: ElementFinder) {
    return el.click();
  }

  getDetailsPageTitle() {
    return element(by.css('app-root mat-toolbar span')).getText();
  }
}
