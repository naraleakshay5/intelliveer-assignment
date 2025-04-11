import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event?: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.event = this.eventService.getEvent(id);
  }

  back() {
    this.router.navigate(['/events']);
  }
}
