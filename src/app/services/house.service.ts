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

  filterHouses(searchTerms: SearchDetails): Observable<House[] | void> {
    const houses = of(STAYS).pipe(
      map((stays) => {
        stays.filter(
          (stay) =>
            stay.city === searchTerms.city &&
            searchTerms.guests <= stay.maxGuests
        );
      })
    );
    return houses;
  }
}
