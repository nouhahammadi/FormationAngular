import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  // tslint:disable-next-line: ban-types
  public headers: String [];
  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = ['Type', 'Client', 'Nbre jours', 'Tgm HT' , 'Total HT', 'Total TTC', 'State']
  }
  changeState(obj: {'item': Prestation, 'state': State}){
    this.prestationService.update(obj.item, obj.state);
  }

}
