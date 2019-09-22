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
      this.SocketService.on('respuesta',function (msg){
        console.log(msg);
        $('#message').append($('<li>').text(msg));
        //window.scrollTo(0, document.body.scrollHeight);
      });
     });
  }

  get f() { return this.FormularioChat.controls }

  onSubmit(){
    //this.mensaje = (<HTMLInputElement>document.getElementById("MensajeID")).value

   // console.log(this.mensaje);
   var mensaje = this.f.MensajePrueba.value;

    this.SocketService.emit('mensajito',mensaje);
    //this.SocketService.on('mensajito', function(msg){
     // $('#messages').append($('<li>').text(msg));
     // window.scrollTo(0, document.body.scrollHeight);
    //});
  }
    

}
