import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrackingEditComponent } from '../tracking-edit/tracking-edit.component';
import { AdminLayoutRoutes } from './admin-layout.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,

  ],
  declarations: [
    TrackingEditComponent,
  ]
})

export class AdminLayoutModule {}
