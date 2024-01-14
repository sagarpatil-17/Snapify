import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SearchComponent,
    NavComponent,
    SkeletonLoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SkeletonLoaderComponent,
    NavComponent
  ]
})
export class SharedModule { }
