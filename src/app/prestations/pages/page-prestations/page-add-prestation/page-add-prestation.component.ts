import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
public title = 'Add Prestation';
public txt = 'Ajouter';
  constructor() { }

  ngOnInit() {
  }

}
