import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { WebsocketService } from './websocket.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MaterialModule } from '../app/material/material.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { MyOwnCustomMaterialModule } from './material';
//import {AngularFireAuthModule} from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TestComponent } from './componentes/test/test.component';
import { NgAisModule } from 'angular-instantsearch';
import { DatePipe } from './pipes/date.pipe';
import { DateComponent } from './componentes/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    DatePipe,
    DateComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
//    MyOwnCustomMaterialModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule
    //WebsocketService
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
