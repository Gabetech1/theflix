import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TrackComponent } from './pages/track/track.component';
import { LoginComponent } from './pages/login/login.component';
import { TrackingListComponent } from './admin/tracking-list/tracking-list.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { NewTrackingComponent } from './admin/new-tracking/new-tracking.component';
import { TrackingEditComponent } from './admin/tracking-edit/tracking-edit.component';
import { TestComponent } from './admin/test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'track', component: TrackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'flix-admin',
    component: AdminLayoutComponent,
    children: [
     {path: '', redirectTo: 'tracking_list', pathMatch: 'full'},
     {path: 'tracking_list', component: TrackingListComponent},
     {path: 'new_tracking', component: NewTrackingComponent},
     {path: 'update_tracking/:id', component: TrackingEditComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
