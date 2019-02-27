import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SharedService {
  private countSource = new BehaviorSubject(null);
  count = this.countSource.asObservable();

  constructor() { }

  changeCount(count: number) {
    this.countSource.next(count);
  }

  flag(message: string, type: string) {
    if (!message || !type) {
      return false;
    }
    const flag = AJS.flag({
      type: type,
      body: message,
    });

    setTimeout(() => {
      flag.close();
    }, 3000);
  }

}
