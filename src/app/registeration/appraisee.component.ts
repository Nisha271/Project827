import { Component, OnInit } from '@angular/core';
import {register} from '../registerTO';
declare var jQuery:any;
@Component({
  selector: 'app-appraisee',
  templateUrl: './appraisee.component.html',
  styleUrls: ['./appraisee.component.css']
})

export class AppraiseeComponent implements OnInit {
  
  abc : boolean = false;
  Register:register = {};
  RegisterList:register [] = [];
  temp = [];
  
  constructor() { }
  ngOnInit() {
  }
  
  
  s1(){
    this.RegisterList.push(this.Register);
  //  this.d1 = {}; 
  }
  ViewInformation(data){
    jQuery("#a1").tab('show');
    this.Register = data;
    this.abc = true;

  }
  SubmitInformation(){
    this.RegisterList.push(this.Register);
    this.Register = {};
     jQuery("#v1").tab('show');
    
  }
  edit(data)
  {
    jQuery("#a1").tab('show');
    this.Register = data;
    jQuery("#button1").html('Update');
  }
  remove()
  
  {
    this.RegisterList = null;
  }
  validateform(a){
    if(this.Register.FirstName != 'null' && this.Register.LastName != 'null' && this.Register.DOB != null
      && this.Register.EmailId != 'null' && this.Register.Function != 'null' && this.Register.Department != 0){
      return false;
    }
    else{
      return true;
    }
  }
}

