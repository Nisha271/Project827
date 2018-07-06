import { Component } from '@angular/core';
import { pass } from './appTO';
import { form } from './formTO';
import { register, id } from './registerTO';


@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
  
})
export class AppComponent{
  
  Pass:pass = {};
  PassList:pass [] = [];
  FormTo:form ={};
  Register: register = {};
  RegisterList: register[] = [];
  s1() {
    this.RegisterList.push(this.Register);
    //  this.d1 = {}; 
  }
  changePasswd(){
    if(this.Pass.CurrentPasswd === this.FormTo.Password){
      
      if(this.Pass.NewPasswd !== this.FormTo.Password){
        this.FormTo.Password = this.Pass.NewPasswd;
      }
      else{
        alert("Password is same as previous");
      }
      if(this.Pass.NewPasswd === this.Pass.ConfirmPasswd){
        this.FormTo.Password = this.Pass.ConfirmPasswd;
      }
      else{
        alert("fail");
      }
    }
    else{
      alert("Current password not match!");
    }
  }
  savePasswd(){
    this.FormTo.Password = this.Pass.NewPasswd;
  }
}



  
