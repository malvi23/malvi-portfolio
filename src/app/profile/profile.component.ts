import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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
      name: 'Home',
      id: 'home',
    },
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Services',
      id: 'services',
    },
    {
      name: 'Portfolio',
      id: 'portfolio',
    },
    {
      name: 'Contact me',
      id: 'contact',
    },
  ];
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  sectionMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit(){
    this.sectionMap = {
      home: this.home,
      about: this.about,
      services: this.services,
      portfolio: this.portfolio,
      contact: this.contact,
    };

  }
  closeSideNav() {
    this.drawer.close();
  }

  scrollToDiv(section: string): void {
    const targetElement = this.sectionMap[section];
    targetElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.closeSideNav()
  }
}
