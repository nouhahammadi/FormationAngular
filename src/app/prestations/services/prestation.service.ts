import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
  get collection(): Prestation[] {
       return this.pCollection;
  }

  // set collection
  set collection(col: Prestation[])
  {
    this.pCollection = col ;
  }

  // add item in collection

  // update item in collection

  // set item by id from collection
}
