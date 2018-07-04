import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cal } from '../formTO';
import { data } from '../data';
import { Product } from '../Product';
declare var a: any 
declare var jQuery:any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  data1=data;
  
  
  filteredItems : Product[];
   pages : number = 4;
  pageSize : number = 10;
   pageNumber : number = 0;
   currentIndex : number = 1;
   items: Product[];
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';

   constructor( ){
     debugger
         this.filteredItems = data;
       this.init();
   };
   init(){
     debugger
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
         this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            data.forEach(element => {
                if(element.FirmName.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
                  this.filteredItems.push(element);
               }
            });
      }else{
         this.filteredItems = data;
      }
      console.log(this.filteredItems);
      this.init();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
 refreshItems(){
               this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }
   prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }

  




  //  data : [
  //     {
  //      " FirmName": string,
  //    "RegisteredMobileNos":number,
  //    "VillageName":string,
  //       "DateOfEstablishment":Date

  //     }
  //  ];

  

//   c:Cal  = {}; 
  
//   FirstNumber:number = null;
//   SecondNumber:number = null;
//   result:number = null;
//   M1 :number=null;
//   M2 :number=null;
//   M3 :number=null;
//   M4 :number=null;
//   M5 :number=null;
//   t:number
//   p: number=null;
//  total:number=500;


//  constructor(private Router:Router) { 
    

//     console.log(data) 
//   }



//   add()
//   {
//       this.result = this.FirstNumber + this.SecondNumber;
//   }
//   sub()
//   {
//       this.result = this.FirstNumber - this.SecondNumber;
//   }

//   mul()
//   {
//       this.result = this.FirstNumber * this.SecondNumber;
//   }
//   div()
//   {
//       this.result = this.FirstNumber / this.SecondNumber;
//   }
//   clr()
//   {
//       this.result = null;
//       this.FirstNumber =null;
//       this.SecondNumber=null;
//       this.M1=null;this.M2=null;this.M3=null;this.M4=null;this.M5=null;
//       this.t=null;this.p=null;

//   }
//   tot()
//   {
//     this.t =(this.M1+this.M2+this.M3+this.M4+this.M5) ;
//   }
// per()
// {
//   this.p=(this.t*100)/(this.total)
// }


  ngOnInit() {
  }

}
