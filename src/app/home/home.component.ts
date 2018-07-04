import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cal } from '../formTO';
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
 // c:Cal  = {}; 
  //cList:Cal [] = [];
 
  constructor(private Router:Router) {

    jQuery('.topMent').show();
   }

  
  
   ngOnInit() {
  }


}
