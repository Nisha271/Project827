import { Component, OnInit } from '@angular/core';
import { task } from '../taskTO';
declare var jQuery:any


@Component({
  selector: 'app-appraiser',
  templateUrl: './appraiser.component.html',
  styleUrls: ['./appraiser.component.css']
})

export class AppraiserComponent implements OnInit {
  
  abc : boolean = false; 
  Task:task = {};
  TaskList:task [] = [];
  project = ['CRM','Sales'];
  module = ['Dashboard','Enquiry','Visits'];
  user = ['Nisha Bukke','Archana Botla','Bhagyashree Dalvi','Shruti Bidwai'];
  priority = ['High','Medium','Low'];
  status = ['New','In progress','Completed'];
  
  AddInformation() {
    jQuery("#a1").tab('show');
    jQuery("#button1").html('Add');
  }
  ViewInformation(data){
    jQuery("#a1").tab('show');
    this.Task = data;
    this.abc = true;
    jQuery("#button1").html('OK');
    this.TaskList = [];
  }
  SubmitInformation(c){
    
    this.TaskList.push(this.Task);
    jQuery("#v1").tab('show');
    // if(c.value === 1){
    //   c.style.color = 'white';
    //   c.style.background = 'red';
    // }
    this.Task = {};
    this.abc = false;  
  }
  isUpdate: boolean = false;
  updateId: number = 0;
  edit(data)
  {
    jQuery("#a1").tab('show');
    this.Task = data;
    jQuery("#button1").html('Update');
    this.TaskList = [];
    this.abc = false;
    this.isUpdate = false;
    this.updateId = 0;
  }
  remove()
  {
    this.TaskList.splice(this.updateId,1);
  }
  ngOnInit() {
  }


  

}
