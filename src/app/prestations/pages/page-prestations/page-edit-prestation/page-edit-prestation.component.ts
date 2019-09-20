import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { database } from 'firebase';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from 'src/app/prestations/services/prestation.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

public item$: Observable<Prestation>;


  constructor(private route: ActivatedRoute, private prestationService: PrestationService) { }

  ngOnInit() {
    // this.item$ = this.route.paramMap
    this.item$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.prestationService.getPrestation(params.get('id'));
    }));

  }

}
