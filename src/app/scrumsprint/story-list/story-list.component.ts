import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
  constructor(public sprintService: SprintService) {}

  deleteStory(index: number): void {
    this.sprintService.deleteStory(index);
  }
}
