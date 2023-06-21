import { Component } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  hideFilter = true;
  location = 'Helsinki';
  filterParams$ = this._house.filteredParamsAction$;

  constructor(private _house: HouseService) {}

  showFilter() {
    this.hideFilter = !this.hideFilter;
  }
}
