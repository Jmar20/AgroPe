import { Routes } from '@angular/router';
import { Plot } from './plot/plot';
import { AddPlot } from './add-plot/add-plot';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Plot  // Componente por defecto del dashboard
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
