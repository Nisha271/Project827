import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router'
import { DashboardComponent } from '../dashboard/dashboard.component';
 
import {details} from '../formTO';
declare var a: number;
declare var jQuery : any;

@Component({
  selector: 'app-appraisee',
  templateUrl: './appraisee.component.html',
  styleUrls: ['./appraisee.component.css']
})
export class AppraiseeComponent implements OnInit {

 l: boolean
  Details:details  = {};
  DetailsList:details []= [];
 
  submit()
  {
    this.DetailsList.push(this.Details);
    this.Details= {} ;
  }

 temp = [];
 Strength = [
   { id: 1 , Value: "HardWorking"},
   { id: 2 , Value: "LeadershipQuality"},
   { id: 3 , Value: "Dedicated"},
   { id: 4 , Value: "GoodCommunication"},

   
 ]
  constructor() {}
 
  ngOnInit() {

  
    }
    
    change(a,val)
    {
    // this.temp.push(a.target.value);
    // console.log(this.temp);
   

     // for ( var i=0;i<this.Strength.length;i++)

     // {
        if(a.target.checked )
        {
          this.temp.push(a.target.value);  
          console.log(this.temp);
        }
      else{
        var c= this.temp.indexOf(a.target.value)
        this.temp.splice(c,1);
        console.log(this.temp);
      }
      
              
      }

      modalpop(id)
      {
        switch(id){
          case '1':
          jQuery("#M1").modal("show");
          break;
         
          case '2':
          jQuery("#M1").modal("show");
          break;
        
          case '3':
          jQuery("#M1").modal("show");
          break;

        
          case '4':
          jQuery("#M1").modal("show");
          break;

          default:
          break;
        }
      }
      
      submit1()
      {
        this.DetailsList.push(this.Details);
         this.Details= {} ;
  
      }

      

    }
   
 

