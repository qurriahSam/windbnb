import { Component } from '@angular/core';
import { House } from 'src/app/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  houses$ = this._house.houses$;

  constructor(private _house: HouseService) {}
}
