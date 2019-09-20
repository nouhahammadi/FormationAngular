import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-prestations/page-add-prestation/page-add-prestation.component';

const appRoutes: Routes = [
  { path: '',
  component: PagePrestationsComponent,
  data: {title: 'Prestations', txt: 'Toutes les prestations', intitule: 'prestation'}
},
  { path: 'add', component: PageAddPrestationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
