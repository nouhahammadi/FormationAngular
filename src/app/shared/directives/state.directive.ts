import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges  {
@Input () appState: State ;
@HostBinding('class') nomClass: string;
  constructor() { }
   // tslint:disable-next-line: use-lifecycle-interface
   ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
   }
   private formatClass = (state: State) => {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
   }

}
