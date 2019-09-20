import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { map } from 'rxjs/operators';
import { fakePrestations } from './fake-prestations';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
public version$ = new BehaviorSubject(1); // <--observable
private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab =>  tab.map(obj =>  new Prestation(obj)))
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
      // tslint:disable-next-line: triple-equals
  }
  // get collection
  get collection(): Observable<Prestation[]> {
       return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col ;
  }

  // add item in collection

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item);
  }
  // add item
  public add(item: Prestation) {
    // this.collection.push(new Prestation(item));

  }
  // set item by id from collection
}
