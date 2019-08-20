import { WebsocketService } from 'src/app/websocket.service';

import { Component, OnInit } from '@angular/core';
//import { WebsocketService } from 'src/app/websocket.service.ts';
@Component({
  selector: 'app-boton-enviar',
  templateUrl: './boton-enviar.component.html',
  styleUrls: ['./boton-enviar.component.css']
})
export class BotonEnviarComponent implements OnInit {

  constructor(private SocketService: WebsocketService ) {

    //this.socket.emit=    




   }

  ngOnInit() {
  }

}
