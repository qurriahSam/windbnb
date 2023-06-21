import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: FilterItemsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
