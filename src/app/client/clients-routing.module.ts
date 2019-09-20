import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const appRoutes: Routes = [
  { path: '', component: PageClientComponent,
  data: {title: 'Client', txt: 'Tous les client', intitule: 'client'}},
  { path: 'add', component: PageAddClientComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
