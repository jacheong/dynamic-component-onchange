import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'rxjs';
  data = {};
  inputSubscription: Subscription;
  input$ = new Subject<KeyboardEvent>();

  constructor() {
    this.inputSubscription = this.input$.pipe(
      debounceTime(250)
    )
    .subscribe(e => {
      let newData  = {
        name: e.target["value"]
      };
      this.data = newData;
    });
  }

  ngOnDestroy() {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
  }
}
