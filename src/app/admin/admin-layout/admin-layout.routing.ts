import { Routes } from '@angular/router';
import { TrackingListComponent } from '../tracking-list/tracking-list.component';
import { NewTrackingComponent } from '../new-tracking/new-tracking.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',      component: TrackingListComponent },
    { path: 'new_tracking',      component: NewTrackingComponent },

];
