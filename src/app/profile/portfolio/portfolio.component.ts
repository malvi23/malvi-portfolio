import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: any[] = [
    {
      title:"Clickeat",
      description: "Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page",
      imgUrl: "assets/imgs/folio-1.jpg"
    },
    {
      title:"EMS",
      description: "Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page",
      imgUrl: "assets/imgs/folio-1.jpg"
    },
    {
      title:"Its My Cab",
      description: "Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page",
      imgUrl: "assets/imgs/folio-1.jpg"
    },
    {
      title:"Grubbrr",
      description: "Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page",
      imgUrl: "assets/imgs/folio-1.jpg"
    }
  ];
}
