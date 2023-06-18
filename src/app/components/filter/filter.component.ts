import { Component } from '@angular/core';
import { SearchDetails } from 'src/app/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  search: SearchDetails = {
    city: 'Helsinki',
    guests: 1,
  };

  constructor(private _house: HouseService) {}

  filterHouses() {
    this._house.filterHousesFunc(this.search);
    console.log('submitted');
  }
}
