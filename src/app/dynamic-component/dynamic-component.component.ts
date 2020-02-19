import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BlueprintDirective } from './blueprint.directive';
import { DcAComponent } from '../dc-a/dc-a.component';
import { DataBridgeService } from './data-bridge.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DynamicComponentComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
