import { Component } from '@angular/core';
import {MsShareService} from './ms-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private msShareService: MsShareService){
    console.log('app.component');
  }
}
