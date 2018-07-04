import { Component, OnInit } from '@angular/core';
import { Projects,modulelist} from '../graphTO';

declare var jQuery : any;
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  p:Projects  = {}; 
  Module:modulelist  = {}; 
  ModuleList:modulelist [] = []; 
  pList:Projects [] = [] ;
  abc:boolean= false;
  ngOnInit() {
  }
sub1()
{
  this.pList.push(this.p);
  this.p={};
  jQuery("#v1").tab("show");
}
view(data)
{
  jQuery("#a1").tab("show");
  this.p=data;
  this.abc=true;
}
edit(data)
{
 
  jQuery("#a1").tab("show");
  this.p=data;
  jQuery("#b1").html("update");
  
 // jQuery("#v1").html("update");
}
remove()
{
  this.pList =null;
}
projectId:number = 0;
attachModule(id)
{
this.projectId = id;
//this.ModuleList = [];
}
sub2()
{
  this.Module.projectId = this.projectId;
 let c = this.ModuleList.push(this.Module)
  this.pList[this.projectId].Module = this.ModuleList;
  this.Module= {};

 
  //this.p={};
  //jQuery("#v1").tab("show");
  
 
}


}
