import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component' ;
import { TestComponent } from './componentes/test/test.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; 
const routes: Routes = [

{path:'', redirectTo:'test',pathMatch:'full'},  
{path:'test',component:TestComponent},
{path:'home', component: HomeComponent },
{path:'login', component:LoginComponent},
{path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
