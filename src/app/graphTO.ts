export class Projects{

    ProjectName?:string
    Status?:string
    Dateofstart?:Date
    Dateofend?:Date
    Module?:modulelist[] = [];
    Description?:string
 }

 export class modulelist
 {
     projectId?:number
     ModuleName?:string
 }