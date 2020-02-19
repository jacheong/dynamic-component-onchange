import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest, Subject } from 'rxjs';
import { take, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  hello$: Observable<string>;
  world$: Observable<string>;
  id$ = new Subject<number>();
  combineLatest$: Observable<string[]>;
  combineLatest = '';
  switchMapResults$: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.hello$ = of('Hello');
    this.world$ = of('World');
  }

  runCombineLatest() {
    this.combineLatest$ = combineLatest(this.hello$, this.world$);
    this.combineLatest$
      .pipe(take(1))
      .subscribe(x => this.combineLatest += x);
  }

  runSwitchMap() {
    this.id$.next(Math.floor(Math.random() * 1000) + 1);
    this.switchMapResults$ = this.id$.pipe(
      switchMap(value => {
        const url = `https://picsum.photos/id/${value}/200/300`;
        return this.http.get(url);
      })
    );

    this.switchMapResults$.subscribe(value => {
      console.log(value);
    });
  }
}
