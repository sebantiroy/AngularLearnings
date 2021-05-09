import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  msg:string = '';
  loginstatus:boolean=false;
  constructor(private _router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username === 'sebanti' && this.password === 'sonai'){
      this.authService.login();
      this.loginstatus = this.authService.isLoggedIn();
    }else{
      this.msg = "Invalid Username or Password";
    }
  }
}
