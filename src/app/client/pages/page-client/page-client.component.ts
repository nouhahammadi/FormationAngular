import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {
  public title: string ;
  public txt: string ;
  public intitule: string ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title = data.title;
      this.txt = data.txt;
      this.intitule = data.intitule;

    });
  }

}
