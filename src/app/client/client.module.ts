import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ListeClientsComponent } from './containers/liste-clients/liste-clients.component';





@NgModule({
  declarations: [PageClientComponent, ItemClientComponent, ListClientsComponent, ListeClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
