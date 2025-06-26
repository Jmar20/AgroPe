import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Plot } from './plot/plot';
import { AddPlot } from './add-plot/add-plot';

const routes: Routes = [
  {
    path: '',
    component: Plot
  },
  {
    path: 'plot',
    component: Plot
  },
  {
    path: 'add-plot',
    component: AddPlot
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
