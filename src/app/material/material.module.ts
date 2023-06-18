import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class MaterialModule {}
