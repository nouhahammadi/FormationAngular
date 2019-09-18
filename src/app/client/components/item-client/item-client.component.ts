import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  @Output () nItem: EventEmitter<{'item': Client, 'state': StateClient}> = new EventEmitter();
  // public states = Object.values(State) ; // if inf angular 6
  public states = StateClient;

  constructor() { }

  ngOnInit() {
  }
  changeState( event ) {
    this.nItem.emit({
        item: this.item,
        state: event.target.value
      }
    );
      }
}
