import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { fakeClients } from './fake-clients';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab =>  tab.map(obj =>  new Prestation(obj)))
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }
   // get collection
   get collection(): Observable<Client[]> {
    return this.pCollection;
}

// set collection
set collection(col: Observable<Client[]>) {
  this.pCollection = col ;
}
add(item: Client): Promise<any> {
  const id = this.afs.createId();
  const client = { id, ...item };
  return this.itemsCollection.doc(id).set(client).catch((e) => {
    console.log(e);
  });
  // return this.http.post(`${this.urlApi}collection`, item);
  // return this.http.post('urlapi/addprestation', item);
}
update(item: Client, state?: StateClient): Promise<any> {
  const client  = {...item};
  if (state) {
    client.state = state;
  }
  return this.itemsCollection.doc(item.id).update(client).catch((e) => {
    console.log(e);
  });
  // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  // return this.http.patch(`${this.urlApi}collection`, presta);
}
public delete(item: Client): Promise<any> {
  return this.itemsCollection.doc(item.id).delete().catch((e) => {
    console.log(e);
  });
  // return this.http.delete(urlapi/prestations/delete/${item.id});
  // return this.http.delete(`${this.urlApi}collection/${item.id}`);
}

getPrestation(id: string): Observable<Client> {
  return this.itemsCollection.doc<Client>(id).valueChanges();
  // return this.http.get(urlapi/prestations/get/${id});
 //  return this.http.get(`${this.urlApi}collection/${item.id}`);
}
}
