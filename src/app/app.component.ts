import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';
  data = {
    name: 'Justin'
  };

  newData() {
    let newData = {
      name: 'Cheong'
    };
    this.data  = newData;
  }
}
