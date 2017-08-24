import { PainelComponent } from './painel.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../auth/auth.guard';

import { IntegracoesComponent } from './integracoes/integracoes.component';
import { ExternosComponent } from './externos/externos.component';
import { ApisComponent } from './apis/apis.component';

const painelRotas: Routes = [
    {
        path: '', component: PainelComponent, children: [
          {
              path: '', redirectTo: 'integracao', pathMatch: 'full'
          },
          {
              path: 'api', component: ApisComponent
          },
          {
              path: 'externo', component: ExternosComponent
          },
          {
              path: 'integracao', component: IntegracoesComponent
          }
        ], canActivate: [AuthGuard]
    }
];

export const painelRoteamento = RouterModule.forChild(painelRotas);
