import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest, map, of, tap } from 'rxjs';

import { STAYS } from 'src/stays';
import { SearchDetails } from '../house';

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
    this.filteredParamsFunc(searchDetails);
  }

  filteredHouses$ = combineLatest([
    this.houses$,
    this.filterHousesAction$,
  ]).pipe(
    map(([houses, searchParams]) =>
      houses.filter(
        (house) =>
          house.city === searchParams.city &&
          house.maxGuests >= searchParams.guests
      )
    )
  );

  private filteredParamsSubject = new BehaviorSubject<SearchDetails>({
    city: 'Helsinki',
    guests: 1,
  });

  filteredParamsAction$ = this.filteredParamsSubject.asObservable();

  filteredParamsFunc(searchDetails: SearchDetails) {
    this.filteredParamsSubject.next(searchDetails);
  }
}
