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

  mensaje = '';
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
        $('#message').append($('<li>').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
      });
     });
  }

   
  onSubmit(){
    this.mensaje = (<HTMLInputElement>document.getElementById("MensajeID")).value
   // console.log(this.mensaje);

    this.SocketService.emit('mensajito',this.mensaje);
    //this.SocketService.on('mensajito', function(msg){
     // $('#messages').append($('<li>').text(msg));
     // window.scrollTo(0, document.body.scrollHeight);
    //});
  }
    

}
