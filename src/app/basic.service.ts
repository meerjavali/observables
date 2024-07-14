import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
   value = new Subject<boolean>();
  constructor() { }

  action(){
    this.value.next(true);
  }
}


/// whata are observables 
//observables are stream of data. when new piece of data emitted or any change detaction happen. we will handle that by subscribing it.
// e.g params, interval these two are predefined observables
// we have created custom observable als
/// we have learnt how to unsubscribe the subscription why it is required..
/// special type of observable passive date handler i.e subject.
