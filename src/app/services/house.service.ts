import { Injectable } from '@angular/core';
import { Observable, filter, map, of } from 'rxjs';

import { STAYS } from 'src/stays';
import { House, SearchDetails } from '../house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor() {}

  getHouses(): Observable<House[]> {
    const houses = of(STAYS);
    return houses;
  }

  filterHouses(searchTerms: SearchDetails): Observable<House[]> {
    const houses = of(STAYS);
    return houses;
  }
}
