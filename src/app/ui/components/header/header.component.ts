import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/prestations/services/prestation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public version: number;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.title = 'Application';
    this.prestationService.version$.subscribe((data) => {
      this.version = data;
    });
  }
  incrementVersion() {
this.prestationService.version$.next(this.version + 1 );
  }

}
