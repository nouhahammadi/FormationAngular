import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/prestations/services/prestation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version: number;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.prestationService.version$.subscribe((data) => {
      this.version = data;
    });
  }

}
