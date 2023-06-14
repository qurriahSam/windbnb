import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  hideFilter = true;
  location = 'Helsinki';

  showFilter() {
    this.hideFilter = !this.hideFilter;
  }
}
