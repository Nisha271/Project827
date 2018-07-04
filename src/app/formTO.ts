export class form
{
    EmailID?:String
    Password?:String
    
}
export class details
{
    LastName?:String
    FirstName?:String
    FatherName?:String
    MotherName?:String
    Gender?:String
    DOB?:Date
    AdhaarNo?:Number
    Address?:String
    City?:String
    State?:String
    MobileNo?:Number
    Email?:String
    Qualification?:String
    Strength?:any [] = [];
    l ?: boolean
}

export class Strength
{
    Strength = [] ;
}

export class Cal{

FirstNumber?: Number
SecondNumber?: Number
Value?:Number
M1?:Number
M2?:Number
M3?:Number
M4?:Number
M5?:Number
p?:Number
t?:Number
total?:Number

}
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