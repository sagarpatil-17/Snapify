import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeSearchComponent,
    HomeContentComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
