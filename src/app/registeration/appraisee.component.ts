import { Component, OnInit } from '@angular/core';
import {register,id} from '../registerTO';

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
  Id:id = {};
  IdList:id []=[];
  temp = [];
  
  constructor() { }
  ngOnInit() {
  }
  
  
  s1(){
    this.RegisterList.push(this.Register);
  //  this.d1 = {}; 
  }
  AddInformation(){
    jQuery("#a1").tab('show');
  }
  ViewInformation(data){
    jQuery("#a1").tab('show');
    this.Register = data;
    this.abc = true;
    jQuery("#button1").html('Ok');
  }
  SubmitInformation(){
    if(!this.abc){
    this.RegisterList.push(this.Register);
  }
    if(this.isUpdate)
    {
      this.RegisterList[this.updateId]=this.Register;
    }
     jQuery("#v1").tab('show');
     this.Register = {};
     this.abc = false;
     this.isUpdate = false;
     this.updateId = 0;  
  }
  isUpdate: boolean = false;
  updateId:number = 0;
  edit(data,id)
  {
    debugger
    this.isUpdate = true;
    this.updateId = id;
    this.IdList = [];
    this.Id.updateId = this.updateId;
    let c = this.RegisterList[this.updateId].Id;
    if(c){
      c.push(this.Id);
    }
    else{
      let c = this.RegisterList[this.updateId];
      this.IdList.push(this.Id);
      c.Id =  this.IdList;
      
    }
    jQuery.extend([],this.RegisterList);
    jQuery("#a1").tab('show');
    this.Register = data;
    jQuery("#button1").html('Update');
    
    //this.Register = {};
     this.abc = false;
     this.isUpdate = false;
     this.updateId = 0;
  }
  remove()
  {
    this.RegisterList = null;
     this.abc = false;
     this.isUpdate = false;
     this.updateId = 0;
  }
  validateform(){
    if(this.Register.FirstName != 'null' && this.Register.LastName != 'null' && this.Register.DOB != null && this.Register.EmailId != 'null')
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}

