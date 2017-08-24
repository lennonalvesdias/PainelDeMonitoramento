import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';

const aplicacaoRotas: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', loadChildren: 'app/painel/painel.module#PainelModule', canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
]

export const aplicacaoRoteamento: ModuleWithProviders = RouterModule.forRoot(aplicacaoRotas);
