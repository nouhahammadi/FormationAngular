import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  // public collection: Client[];
  public collection$: Observable<Client[]>;
  // tslint:disable-next-line: ban-types
public headers: string [];
  constructor(private clientService: ClientService) { }


  ngOnInit() {
    this.collection$ = this.clientService.collection;
    this.headers = ['Name', 'Email', 'State'];
  }
  changeState(obj: {'item': Client, 'state': StateClient}) {
    this.clientService.update(obj.item, obj.state).then(() => {
      obj.item.state = obj.state;

    });
  }

}
