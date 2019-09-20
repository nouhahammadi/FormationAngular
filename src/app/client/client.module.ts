import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ListeClientsComponent } from './containers/liste-clients/liste-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { TemplatesModule } from '../templates/templates.module';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [PageClientComponent, ItemClientComponent, ListClientsComponent, ListeClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
