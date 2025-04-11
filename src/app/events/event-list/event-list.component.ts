import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './event-list.component.html'
})
export class EventListComponent {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  paginatedEvents: Event[] = [];

  currentPage = 1;
  pageSize = 2;
  totalPages = 0;

  selectedDate: string = ''; 

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.events = this.eventService.getEvents();
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedDate) {
      this.filteredEvents = this.events.filter(event => event.date === this.selectedDate);
    } else {
      this.filteredEvents = [...this.events];
    }
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredEvents.length / this.pageSize);
    this.updatePaginatedEvents();
  }

  updatePaginatedEvents() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedEvents = this.filteredEvents.slice(start, end);
  }

  onDateChange() {
    this.applyFilter();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedEvents();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedEvents();
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/events', id]);
  }

  editEvent(id: number) {
    this.router.navigate(['/events/edit', id]);
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
    this.loadEvents();
  }
}
