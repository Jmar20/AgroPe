import { Routes } from '@angular/router';
import { canActivateDashboard } from './core/guards/auth-guard';

import { PublicLayout } from './layouts/public-layout/public-layout';
import { PrivateLayout } from './layouts/private-layout/private-layout';

import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Page404 } from './pages/page404/page404';

export const routes: Routes = [
  // Rutas públicas con PublicLayout
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'conocenos',
        component: AboutUs
      },
      {
        path: 'contacto',
        component: Contact
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  // Rutas privadas con PrivateLayout
  {
    path: 'dashboard',
    component: PrivateLayout,
    canActivate: [canActivateDashboard],
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.dashboardRoutes)
      }
    ]
  },
  // Página 404 sin layout
  {
    path: '**',
    component: Page404
  }
];
