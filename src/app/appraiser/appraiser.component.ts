import { Component, OnInit } from '@angular/core';
import { task } from '../taskTO';
declare var jQuery:any;



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
  user = ['Nisha Bukke','Archana Botla','Bhgyashree Dalvi','Shruti Bidwai'];
  priority = ['High','Medium','Low'];
  status = ['New','In progress','Completed'];
  ViewInformation(data){
    jQuery("#a1").tab('show');
    this.Task = data;
    this.abc = true;

  }
  SubmitInformation(){
    this.TaskList.push(this.Task);
    this.Task = {};
     jQuery("#v1").tab('show');
    
  }
  edit(data)
  {
    jQuery("#a1").tab('show');
    this.Task = data;
    jQuery("#button1").html('Update');
  }
  remove()
  {
    this.TaskList = null;
  }
  ngOnInit() {
  }


  

}
