import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Cal } from '../formTO';

declare var jQuery:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 
  constructor(private Router:Router) { 
    jQuery('.topMent').show();

  }
  
  C:Cal  = {};
  

  ngOnInit()
   {
  
   }
  
   
}
