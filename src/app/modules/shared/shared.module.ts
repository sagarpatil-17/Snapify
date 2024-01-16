import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent,
    NavComponent,
    SkeletonLoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SkeletonLoaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
