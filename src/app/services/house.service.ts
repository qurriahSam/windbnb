import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, of, tap } from 'rxjs';

import { STAYS } from 'src/stays';
import { House, SearchDetails } from '../house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor() {}

  houses$ = of(STAYS).pipe(tap((data) => console.log(data)));
}
