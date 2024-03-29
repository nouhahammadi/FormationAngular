import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
public states = State;
public form: FormGroup;
@Output () nitem: EventEmitter<Prestation> = new EventEmitter();
@Input() private init = new Prestation();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateForm();
    console.log(this.init);
  }

  generateForm() {
    this.form = this.fb.group({
typePresta: [
  this.init.typePresta,
 Validators.required],
 client: [
   this.init.client,
   Validators.compose([Validators.required, Validators.minLength(3)])],
 nbJours: [this.init.nbJours],
 tjmHt: [this.init.tjmHt],
 tauxTva: [this.init.tauxTva],
 state: [this.init.state],
 comment: [this.init.comment]
    });
  }
  onSubmit() {
    this.nitem.emit(this.form.value);
  }
}
