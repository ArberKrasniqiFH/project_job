import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobViewComponent } from './job-view/job-view.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'job/view', component: JobViewComponent 
  },
   {
    path: 'job/create', component: JobCreateComponent
  }, 
  {
    path: 'job', component: MainComponent
  },
  {
    path: '', redirectTo: 'job', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
