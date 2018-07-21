import { Component, OnInit } from '@angular/core';
import { register, id } from '../registerTO';

declare var jQuery: any;
@Component({
  selector: 'app-appraisee',
  templateUrl: './appraisee.component.html',
  styleUrls: ['./appraisee.component.css']
})

export class AppraiseeComponent implements OnInit {

  abc: boolean = false;
  Register: register = {};
  RegisterList: register[] = [];
  Id: id = {};
  IdList: id[] = [];
  temp = [];

 
  ngOnInit() {
  }


  s1() {
    this.RegisterList.push(this.Register);
    //  this.d1 = {}; 
  }
  AddInformation() {
    jQuery("#a1").tab('show');
    jQuery("#button1").html('Add');

  }
  ViewInformation(data) {
    jQuery("#a1").tab('show');
    this.Register = data;
    this.abc = true;
    jQuery("#button1").html('OK');
    this.RegisterList = [];
  }
  SubmitInformation() {
    debugger;
    jQuery("#v1").tab('show');
    this.RegisterList.push(this.Register);
    this.Register = {};
    this.abc = false;
    this.isUpdate = false;
    this.updateId = 0;
  }
  isUpdate: boolean = false;
  updateId: number = 0;
  edit(data, id) {
    jQuery("#a1").tab('show');
    this.Register = data;
    jQuery("#button1").html('Update');
    this.RegisterList = [];
    this.abc = false;
    this.isUpdate = false;
    this.updateId = 0;
  }
  remove() {
    this.RegisterList.splice(this.updateId,1);
  }
  validateform() {
    if (this.Register.FirstName != 'null' && this.Register.LastName != 'null' && this.Register.DOB != null && this.Register.EmailId != 'null') {
      return false;
    }
    else {
      return true;
    }
  }
}

