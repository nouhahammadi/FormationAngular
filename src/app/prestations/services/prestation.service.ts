import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
public version$ = new BehaviorSubject(1); // <--observable
  private pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
  get collection(): Prestation[] {
       return this.pCollection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this.pCollection = col ;
  }

  // add item in collection

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item);
  }

  // set item by id from collection
}
