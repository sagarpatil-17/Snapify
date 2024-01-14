import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './modules/home/home-layout/home-layout.component';
import { SearchComponent } from './modules/shared/search/search.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'search/:searchText', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
