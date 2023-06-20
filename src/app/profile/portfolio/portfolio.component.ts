import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: any[] = [
    {
      title: 'Click Eat',
      subTitle:'Click Eat- Online table booking system',
      description:
        'Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page',
      imgUrl: 'assets/imgs/folio-1.jpg',
    },
    {
      title: 'EMS',
      subTitle:'Environmental Monitoring System',
      description:
        'Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page',
      imgUrl: 'assets/imgs/folio-1.jpg',
    },
    {
      title: 'Its My Cab',
      subTitle:'ItsMyCab- Online Cab Reservation System',
      description:
        'Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page',
      imgUrl: 'assets/imgs/folio-1.jpg',
    },
    {
      title: 'Grubbrr',
      subTitle:'Restaurant Kiosk Software Systems',
      description:
        'Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page',
      imgUrl: 'assets/imgs/folio-1.jpg',
    },
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(project: { title: string; subTitle:string, description: string; imgUrl: string }) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
