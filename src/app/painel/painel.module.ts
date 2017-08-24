import { IntegracoesModule } from './integracoes/integracoes.module';
import { ExternosModule } from './externos/externos.module';
import { ApisModule } from './apis/apis.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { painelRoteamento } from './painel.routing';

import { PainelComponent } from './painel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    ApisModule,
    ExternosModule,
    IntegracoesModule,
    painelRoteamento
  ],
  declarations: [PainelComponent],
  exports: [PainelComponent]
})
export class PainelModule { }
