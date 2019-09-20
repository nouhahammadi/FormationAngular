import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(private prestationService: PrestationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  submitted(item: Prestation) {
    this.prestationService.add(item).then(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });

  }
  // this.prestationService.add(item).subcribe((data) => {
  //   this.router.navigate(['../'], {relativeTo: this.route});
  //  });

}
