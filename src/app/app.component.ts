import { Input, Output,EventEmitter, Component } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  fontSizePx = [];

  constructor(){
      this.fontSizePx.push({'severity':'success', 'summary':'Success', 'detail':"asd"});
  }
}
