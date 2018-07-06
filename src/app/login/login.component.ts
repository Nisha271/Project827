import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {form} from '../formTO';
import { pass } from '../appTO';

declare var jQuery:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router) {
    jQuery ('.topbar').hide();
   }
    FormTo:form = {};
    Pass:pass = {};
    PassList:pass [] = [];
  ngOnInit() {
  }
  submit(){
  
    console.log(this.FormTo)
    if(this.FormTo.Email == 'nisha' && this.FormTo.Password == '276')
    {
      this.Router.navigate(['dashboard'])
    }
    else
    {
      document.getElementById('nr1').innerHTML="Invalid name or password";
    }
  }
  
}
