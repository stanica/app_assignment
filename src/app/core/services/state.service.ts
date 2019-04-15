import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
  private pageSource = new BehaviorSubject('');
  private page = this.pageSource.asObservable();

  private hasPreviousPageSource = new BehaviorSubject(false);
  private hasPreviousPage = this.hasPreviousPageSource.asObservable();

  constructor() {}

  getPage() {
    return this.page;
  }

  setPage(page: string) {
    this.pageSource.next(page);
  }

  getPreviousPage() {
    return this.hasPreviousPage;
  }

  setPreviousPage(state: boolean) {
    this.hasPreviousPageSource.next(state);
  }
}
