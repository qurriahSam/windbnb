import { Injectable } from '@angular/core';
import { Subject, combineLatest, map, of, tap } from 'rxjs';

import { STAYS } from 'src/stays';
import { House, SearchDetails } from '../house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor() {}

  houses$ = of(STAYS).pipe(tap((data) => console.log(data)));

  private filterHousesSubject = new Subject<SearchDetails>();
  filterHousesAction$ = this.filterHousesSubject.asObservable();

  filterHousesFunc(searchDetails: SearchDetails) {
    this.filterHousesSubject.next(searchDetails);
  }

  filteredHouses$ = combineLatest([
    this.houses$,
    this.filterHousesAction$,
  ]).pipe(
    tap((result) => console.log(result)),
    map(([houses, searchParams]) =>
      houses.filter(
        (house) =>
          house.city === searchParams.city &&
          house.maxGuests >= searchParams.guests
      )
    )
  );
}
