import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'scrum-sprint', loadChildren: () => import('./scrumsprint/scrumsprint.module').then(m => m.ScrumSprintModule) },
  { path: '**', redirectTo: 'scrum-sprint' } // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
