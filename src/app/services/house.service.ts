import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { STAYS } from 'src/stays';
import { House } from '../house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor() {}

  getHouses(): Observable<House[]> {
    const houses = of(STAYS);
    return houses;
  }
}
