import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
@Input() item: Prestation;
  constructor(private prestationService: PrestationService, private route: Router) {
  }

  ngOnInit() {
  }
submitted(item: Prestation) {
console.log(item);
item.id = this.item.id;
this.prestationService.update(item).then(() => {
this.route.navigate(['prestations']);
});
this.route.navigate(['prestations']);
}
}
