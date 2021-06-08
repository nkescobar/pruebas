import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  public getValue(): string {
    return 'valor real';
  }

  public getObservableValue(): Observable<string> {
    return of('observable valor');
  }

  public getPromiseValue(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise valor');
    })
  }
}
