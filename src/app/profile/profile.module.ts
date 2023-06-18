import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ]
})
export class ProfileModule { }
