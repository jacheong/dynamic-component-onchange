import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBridgeService {

  data = new BehaviorSubject<any>(null);

  constructor() { }
}
