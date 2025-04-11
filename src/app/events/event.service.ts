import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public events: Event[] = [
    { id: 1, title: 'Comedy concert', date: '2025-04-11', location: 'Pune MH', description: 'Live performance' },
    { id: 2, title: 'Music Concert', date: '2025-04-11', location: 'Pune MH', description: 'Live performance' }
  ];
  public nextId = 2;

  getEvents(): Event[] {
    return [...this.events];
  }

  getEvent(id: number): Event | undefined {
    return this.events.find(e => e.id === id);
  }

  addEvent(event: Event) {
    event.id = this.nextId++;
    this.events.push(event);
  }

  updateEvent(event: Event) {
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) this.events[index] = event;
  }

  deleteEvent(id: number) {
    this.events = this.events.filter(e => e.id !== id);
  }
}
