import { Component } from '@angular/core';
import { House } from 'src/app/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  houses: House[] = [];

  constructor(private _house: HouseService) {}

  ngOnInit() {
    this.getHouses();
  }

  getHouses() {
    this._house.getHouses().subscribe((houses) => (this.houses = houses));
  }
}
