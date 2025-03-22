import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
  constructor(public sprintService: SprintService,private toastr: ToastrService) {}

  deleteStory(index: number): void {
    if (confirm('Are you sure you want to remove the story ? This action cannot be undone.')) {
      this.sprintService.deleteStory(index);
      this.toastr.success('Story Removed successfully!', 'Success');
    }
  }
}
