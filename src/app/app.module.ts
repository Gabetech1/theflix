import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TrackComponent } from './pages/track/track.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { LoginComponent } from './pages/login/login.component';
import { TrackingListComponent } from './admin/tracking-list/tracking-list.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { TrackingEditComponent } from './admin/tracking-edit/tracking-edit.component';
import { NewTrackingComponent } from './admin/new-tracking/new-tracking.component';
import { SidebarComponent } from './admin/admin-layout/shared/sidebar/sidebar.component';
import { NavbarComponent } from './admin/admin-layout/shared/navbar/navbar.component';
import { TestComponent } from './admin/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TrackComponent,
    LoginComponent,
    TrackingListComponent,
    AdminLayoutComponent,
    TrackingEditComponent,
    NewTrackingComponent,
    SidebarComponent,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
