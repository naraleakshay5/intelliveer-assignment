import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  eventForm: FormGroup;
  eventId: number | null = null;
  isEditMode = false;

  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public eventService: EventService
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.eventId) {
      const event = this.eventService.getEvent(this.eventId);
      if (event) {
        this.eventForm.patchValue(event); 
        this.isEditMode = true;
      }
    }
  }


  submitForm() {
    if (this.eventForm.valid) {
      const formValue = this.eventForm.value;

      if (this.isEditMode && this.eventId !== null) {
        const updatedEvent: Event = { id: this.eventId, ...formValue };
        this.eventService.updateEvent(updatedEvent); 
      } else {
        this.eventService.addEvent(formValue); 
      }
      this.router.navigate(['/events']);
    }
    
  }
}
