import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
@Input() item: Prestation;
@Output () nItem: EventEmitter<{'item': Prestation, 'state': State}> = new EventEmitter();

// public states = Object.values(State) ; // if inf angular 6
public states = State;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  changeState( event ) {
this.nItem.emit({
    item: this.item,
    state: event.target.value
  }
);
  }
  edit() {
    this.router.navigate(['prestations/edit', this.item.id]);
      }
}
