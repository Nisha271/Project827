import { Component, OnInit } from '@angular/core';
import { Projects, modulelist } from '../graphTO';
//import { deepClone } from 'deep-clone';

declare var jQuery: any;
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  p: Projects = {};
  Module: modulelist = {};
  ModuleList: modulelist[] = [];
  pList: Projects[] = [];
  abc: boolean = false;
  l: any[] = [];

  ngOnInit() {
  }
  sub1() {
    this.pList.push(this.p);
    this.p = {};
    jQuery("#v1").tab("show");
  }
  view(data) {
    jQuery("#a1").tab("show");
    this.p = data;
    this.abc = true;
  }
  edit(data) {

    jQuery("#a1").tab("show");
    this.p = data;
    jQuery("#b1").html("update");
    this.pList = [];


    // jQuery("#v1").html("update");
  }
  projectId: number = 0;
  attachModule(id) {
    this.projectId = id;
    //this.ModuleList = [];
  }
  remove() {
     this.p.projectId = this.projectId;
    //let a = this.pList[this.p.projectId]
    var a = this.p.projectId;
   // this.pList[this.p.projectId] = null;
    this.pList.splice(this.projectId,1);
    // this.pList.[this.p.projectId]= [] ;
    // this.pList.pop(this.projectId) = [];
  }

  sub2() {
    debugger
   
    this.ModuleList = [];
    this.Module.projectId = this.projectId;
    let c = this.pList[this.projectId].Module;
    if (c) {
      c.push(this.Module);
    }
    else {
      let c = this.pList[this.projectId];
      this.ModuleList.push(this.Module);
      c.Module = this.ModuleList
      //jQuery.extend({},list);
      
    }


    //c.Module = this.ModuleList;
    // var  c = this.ModuleList.push(this.Module);

    //var x = this.l.push(Object.assign({}, this.ModuleList));
    // var a= this.ModuleList;
    // let  a= _.cloneDeep(this.ModuleList)
    // this.l = Object.assign([], this.ModuleList);

    //this.pList[this.projectId].Module = this.l;
    //this.l =[];
    // this.ModuleList =[];
    this.Module = {};

    //this.p={};
    //jQuery("#v1").tab("show");


  }
sub()
{
  
  
}

}
