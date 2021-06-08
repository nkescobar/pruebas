import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue Deberia retonar un valor real', () => {
    expect(service.getValue()).toBe('valor real');
  });

  it('#getObservableValue Deberia retonar un valor de un observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value)=> {
      expect(value).toBe('observable valor');
      done();
    });
  });

  it('#getPromiseValue Deberia retornar el valor de una promesa', (done: DoneFn) => {
    service.getPromiseValue().then((value)=> {
      expect(value).toBe('promise valor');
      done();
    });
  });
});
