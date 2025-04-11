import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'events/add', component: EventFormComponent },
    { path: 'events/edit/:id', component: EventFormComponent },
    { path: 'events/:id', component: EventDetailsComponent }
  ];
  
