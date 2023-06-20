import { Component } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css'],
})
export class FilterItemsComponent {
  houses$ = this._house.filteredHouses$;

  constructor(private _house: HouseService) {}
}
