import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auto-selected-sprint',
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.scss']
})
export class AutoSelectedSprintComponent {
  constructor(public SprintService: SprintService,private toastr: ToastrService) {}

  removeFromSprint(index: number): void {
    if (confirm('Are you sure you want to remove the story ? This action cannot be undone.')) {
      this.SprintService.removeSelectedStory(index);
      this.toastr.success('Story Removed successfully!', 'Success');
    }
  }
}
