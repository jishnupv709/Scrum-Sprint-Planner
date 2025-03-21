import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrumSprintRoutingModule } from './scrumsprint-routing.module';

import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { AutoSelectedSprintComponent } from './auto-selected-sprint/auto-selected-sprint.component';
import { ManageStoriesComponent } from './manage-stories/manage-stories.component';
import { ManageSprintComponent } from './manage-sprint/manage-sprint.component';

@NgModule({
  declarations: [
    StoryFormComponent,
    StoryListComponent,
    SprintCalculatorComponent,
    AutoSelectedSprintComponent,
    ManageStoriesComponent,
    ManageSprintComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScrumSprintRoutingModule
  ]
})
export class ScrumSprintModule {}
