import { Directive, ViewContainerRef, Input, SimpleChange, ComponentFactoryResolver, SimpleChanges, OnChanges, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataBridgeService } from './data-bridge.service';
import { DcAComponent } from '../dc-a/dc-a.component';

const componentMapper = {
  'dc-a': DcAComponent
};

@Directive({
  selector: '[appBlueprint]'
})

export class BlueprintDirective implements OnChanges, OnInit, OnDestroy {
  @Input() data: any;
  factory: any;
  viewRef: any;
  componentRef: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private dataBridge: DataBridgeService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.factory = this.componentFactoryResolver.resolveComponentFactory(componentMapper["dc-a"]);
    this.componentRef = this.viewContainerRef.createComponent(this.factory);
    (<DcAComponent>this.componentRef.instance).data = null;
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.data) {
      this.dataBridge.data.next(change.data.currentValue);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
