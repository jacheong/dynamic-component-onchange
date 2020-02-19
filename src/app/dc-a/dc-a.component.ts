import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataBridgeService } from '../dynamic-component/data-bridge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dc-a',
  templateUrl: './dc-a.component.html',
  styleUrls: ['./dc-a.component.scss'],
})
export class DcAComponent implements OnInit, OnDestroy {

  data = {};
  subscriptions: Subscription[] = [];

  constructor(
    private dataBridge: DataBridgeService,
    private cdf: ChangeDetectorRef  
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.dataBridge.data.subscribe(values => {
        this.data = values;
        this.cdf.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
