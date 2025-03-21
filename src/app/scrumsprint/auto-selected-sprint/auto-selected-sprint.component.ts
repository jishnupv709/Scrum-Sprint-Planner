import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-auto-selected-sprint',
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.scss']
})
export class AutoSelectedSprintComponent {
  constructor(public SprintService: SprintService) {}

  removeFromSprint(index: number): void {
    this.SprintService.removeSelectedStory(index);
  }
}
