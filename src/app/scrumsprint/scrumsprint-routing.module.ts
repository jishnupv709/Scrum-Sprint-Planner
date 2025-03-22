import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStoriesComponent } from './manage-stories/manage-stories.component';
import { ManageSprintComponent } from './manage-sprint/manage-sprint.component';

const routes: Routes = [
  { path: 'manage-stories', component: ManageStoriesComponent },
  { path: 'manage-sprint', component: ManageSprintComponent },
  { path: '**', redirectTo: 'manage-stories' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumSprintRoutingModule {}
