import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  events: string[] = [];
  opened: boolean = false;
  showFiller = false;
  menuList: any[] = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Services'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact me'
    }
  ]
}
