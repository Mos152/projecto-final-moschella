import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { WebsocketService } from 'src/app/websocket.service';
//import { $ } from 'protractor';
//declare var JQuery:any
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FormularioChat:FormGroup ;

//  mensaje = '';
  constructor(
    private formBuilder: FormBuilder,
    private SocketService: WebsocketService,
  ) { }

  ngOnInit() {
   
    this.FormularioChat = this.formBuilder.group({
      MensajePrueba: ['',Validators.required ],
    });

    $(document).ready(() => {
      this.SocketService.on('mensajito',function (msg){
        console.log(msg);
        $('#messages').append($('<li>').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
      });
     });
  }
  get f() { return this.FormularioChat.controls }

  onSubmit(){
   var mensaje = this.f.MensajePrueba.value;
    this.SocketService.emit('mensajito',mensaje);
  }
}
