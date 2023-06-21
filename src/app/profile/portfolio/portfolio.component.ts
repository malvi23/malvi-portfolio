import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export interface Project {
  title: string;
  subTitle: string;
  description: string;
  images: string[];
  imgExt:string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: any[] = [
    {
      title: 'EMS',
      subTitle: 'Environmental Monitoring System',
      description:
        'Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page',
      images: ['EMS'],
      imgExt: 'jpg',
    },
    {
      title: 'Click-Eat',
      subTitle: 'Click-Eat — Online food ordering and Book a table service',
      url: 'https://test.pivotaltechnology.co.uk',
      description:
        'The application developed is unique for Restaurant owners, Customers, Sales and Business owner. It gives restaurants full control of the management of their business. A customer can search for a favorite restaurant, usually filtered via type of cuisine and choose from available items, and choose delivery or pick-up and can book a table via seating chart (Designed by restaurant) or time slots or button directly.',
      images: [
        'click-eat1',
        'click-eat2',
        'click-eat3',
        'click-eat4',
        'click-eat5',
        'click-eat6',
      ],
      imgExt: 'png',
    },
    {
      title: 'Motive8',
      subTitle: 'Motive8 — Gym induction management system',
      url: 'https://bookings.m8group.co.uk/',
      description:
        'This application is use for managing gym inductions. There are three roles - Admin, Customer and Trainer. Customer can book an induction of their location and make payments and refund policy is also provided on cancellation. Admin can manage payments, customers and inductions.',
      images: ['motive81', 'motive82', 'motive83', 'motive84', 'motive85'],
      imgExt: 'png',
    },
    {
      title: 'Itsmycab',
      subTitle: 'Itsmycab — Operator panel for car rental service',
      url: 'Not available',
      description:
        'This project is an Operator Panel developed for Car Rentals Services. Operator can manage their all details i.e.Bookings, Cabs, Rates, Drivers, Garages.Functionalities provided by this panel: Login, Forgot Password & Reset Password, Dashboard for General overview, Manage Inventory --> Manage Cab, Manage Driver, Manage Garage, Manage Rates, Manage Bookings, We have implemented advanced front-end validations in all pages using Parsley (Javascript form validation library).We have also implemented Booking Calendar (shows booking date- wise for current month and upcoming months), Statistics Graphs, Google maps APIs (customize maps, load city wise areas).We have used Angularjs Framework to make it more user friendly and responsive.For optimizing pages, we used APIs that is developed in Laravel.',
      images: ['itsmycab1'],
      imgExt: 'jpg',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(project: Project) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
