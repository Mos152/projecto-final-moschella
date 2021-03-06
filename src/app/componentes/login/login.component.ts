import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router,
    private fb: FormBuilder,
    public authService: AuthService) { 
      this.createForm();
    }
    createForm() {
      this.loginForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['',Validators.required]
      });
    }
    tryLogin(value){
      this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
    }
}
