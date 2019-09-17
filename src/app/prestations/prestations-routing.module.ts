import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  { path: 'prestations', component: PagePrestationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
