import { PainelModule } from './painel/painel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    PainelModule
  ],
  exports: [
    SlideComponent
  ],
  declarations: [
    SlideComponent
  ]
})
export class ComponentsModule { }
