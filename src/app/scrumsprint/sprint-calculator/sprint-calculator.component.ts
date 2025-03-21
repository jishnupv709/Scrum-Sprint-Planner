import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent {
  sprintCapacity: number | null = null;

  constructor(private SprintService: SprintService) {}

  generateSprint() {
    if (this.sprintCapacity !== null) {
      this.SprintService.generateSprint(this.sprintCapacity);
    }
  }

  clearStories() {
    this.SprintService.clearStories();
  }

  clearSprint() {
    this.SprintService.clearSelectedStories();
  }
}
