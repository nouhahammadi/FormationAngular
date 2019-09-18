import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { fakeClients } from './fake-clients';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private pCollection: Client[];

  constructor() {
    this.collection = fakeClients;
  }
   // get collection
   get collection(): Client[] {
    return this.pCollection;
}

// set collection
set collection(col: Client[]) {
 this.pCollection = col ;
}

// add item in collection

// update item in collection
public update(item: Client, state: StateClient) {
 item.state = state;
 console.log(item);
}

}
