import { Component, Input } from '@angular/core';
import { House } from 'src/app/house';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() house: House | null = null;
}
