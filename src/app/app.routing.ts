import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';

export const aplicacaoRotas: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
]
