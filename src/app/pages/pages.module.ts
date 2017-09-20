import { ComponentsModule } from './../components/components.module';
import { pagesRotas } from './pages.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule.forChild(pagesRotas)
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule { }
