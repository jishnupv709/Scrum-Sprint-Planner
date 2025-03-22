import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent {
  storyName = '';
  storyPoints: number | null = null;
  storyDescription = '';

  constructor(private sprintService: SprintService, private toastr: ToastrService) {}

  addStory() {
    const trimmedName = this.storyName.trim();
    const trimmedDescription = this.storyDescription.trim();

    if (!trimmedName || this.storyPoints === null || this.storyPoints <= 0 || !trimmedDescription) {
      this.toastr.info('All fields are required. Please provide valid inputs.', 'Validation Error');
      return;
    }

    const isAdded = this.sprintService.addStory(trimmedName, this.storyPoints, trimmedDescription);
    
    if (isAdded) {
      this.toastr.success('Story added successfully!', 'Success');
      this.storyName = '';
      this.storyPoints = null;
      this.storyDescription = '';
    } else {
      this.toastr.error('Story already exists or could not be added.', 'Error');
    }
  }
}
