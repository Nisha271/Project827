import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {form} from '../formTO'
declare var jQuery:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router) { 

    jQuery('.topMent').hide();
  }
  FormTo:form  = {};
  ngOnInit() {
  }

  submitFormData(){
    
    console.log(this.FormTo)
    if(this.FormTo.EmailID == 'admin' && this.FormTo.Password == 'admin')
    {
      //alert('success');
      this.Router.navigate(['home'])
    }
    else
    {
      alert('fail')
    }
  }

  }
