import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent {
  storyName = '';
  storyPoints: number | null = null;
  storyDescription='';

  constructor(private SprintService: SprintService) {}

  addStory() {
    if (!this.storyName || this.storyPoints === null) return;
    if (!this.SprintService.addStory(this.storyName, this.storyPoints,this.storyDescription)) {
    } else {
      this.storyName = '';
      this.storyPoints = null;
      this.storyDescription='';
    }
  }
}
