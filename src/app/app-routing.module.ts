import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: FilterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
