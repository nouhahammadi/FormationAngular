import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
  // tslint:disable-next-line: ban-types
@Input() headers: String[];
  constructor() { }

  ngOnInit() {
  }

}
