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
    debugger
    this.FormTo.Password = '276';
    if(this.Pass.CurrentPasswd !== this.FormTo.Password){
      document.getElementById('cp').innerHTML="Password mismatch!";
    }
     else{
      if(this.Pass.NewPasswd !== this.FormTo.Password){
        this.FormTo.Password = this.Pass.NewPasswd;
       }
       else{
        document.getElementById('np').innerHTML="Current Password and New Password should not be same";
       }
       if(this.Pass.NewPasswd === this.Pass.ConfirmPasswd){
        this.FormTo.Password = this.Pass.ConfirmPasswd; 
      }
      else{
        document.getElementById('confp').innerHTML="fail"; 
      }
      this.FormTo.Password = this.Pass.NewPasswd;
     } 
  }
  clear(){
    this.Pass.CurrentPasswd = null;
    this.Pass.NewPasswd = null;
    this.Pass.ConfirmPasswd = null;
    document.getElementById('cp').innerHTML = null;
    document.getElementById('np').innerHTML = null;
    document.getElementById('confp').innerHTML = null;
  }
  validatepasswd() {
    if (this.Pass.CurrentPasswd != 'null' && this.Pass.NewPasswd != 'null' && this.Pass.ConfirmPasswd != null) {
      return false;
    }
    else {
      return true;
    }
  }
  savePasswd(){
    
  }
}



  
