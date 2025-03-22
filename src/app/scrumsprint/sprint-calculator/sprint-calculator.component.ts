import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent {
  sprintCapacity: number | null = null;

  constructor(private SprintService: SprintService,private toastr: ToastrService) {}

  generateSprint() {
    if (this.sprintCapacity === null || this.sprintCapacity <= 0) {
      this.toastr.warning('Please enter a valid sprint capacity.', 'Warning');
      return;
    }
  
    this.SprintService.generateSprint(this.sprintCapacity);
    this.toastr.success('Sprint generated successfully!', 'Success');
  }
  

  clearStories() {
    if (confirm('Are you sure you want to remove all stories? This action cannot be undone.')) {
      this.SprintService.clearStories();
      this.toastr.success('All stories have been removed successfully!', 'Success');
    }
  }
  
  clearSprint() {
    if (confirm('Are you sure you want to remove all sprint stories? This action cannot be undone.')) {
      this.SprintService.clearSelectedStories();
      this.toastr.success('All stories in the sprint have been removed successfully!', 'Success');
    }
  }
  
}
