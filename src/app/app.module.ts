import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {routes} from './app.routes'
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
