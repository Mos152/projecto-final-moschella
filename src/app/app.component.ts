import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockettutorial';

  constructor(private WebsocketService: WebsocketService){}

  ngOnInit(){
  
    this.WebsocketService.listen('test event').subscribe((data)=> {

      console.log(data);
  })
}
}