import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      subTitle: string;
      description: string;
      imgUrl: string;
    }
  ) {}

  ngOnInit() {
    console.log('data:', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
