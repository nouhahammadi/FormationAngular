import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-prestations/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-prestations/page-edit-prestation/page-edit-prestation.component';

const appRoutes: Routes = [
  { path: '',
  component: PagePrestationsComponent,
  data: {title: 'Prestations', txt: 'Toutes les prestations', intitule: 'prestation'}
},
  { path: 'add', component: PageAddPrestationComponent },
  { path: 'edit/:id', component: PageEditPrestationComponent }
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
