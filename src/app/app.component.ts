import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';
msg:string = '';

  employees =[
    {name: "Diego", position: "Manager", email: "diego@email.com" },
    {name: "Pedro", position: "Desinger" , email: "pedro@email.com"},
    {name: "Jose", position: "Programer", email: "jose@email.com" }

 ];

 model:any = {};

 model2:any = {};

 hideUpdate: boolean = true;


 addEmployee():void{

this.employees.push(this.model)
this.msg="Added field"
 };

 deleteEmployee(i):void{
 var answer = confirm('Are you sure??');
 if(answer){
   this.employees.splice(i, 1);
   this.msg="Deleted field"
 }
 };


myValue;
 editEmployee(i):void{
   this.hideUpdate= false;
   this.model2.name= this.employees[i].name;
   this.model2.position= this.employees[i].position;
   this.model2.email= this.employees[i].email;
   this.myValue = i;

 };

 updateEmployee():void{
let i = this.myValue;
for(let j=0 ; j < this.employees.length; j++){
  if(i== j){
    this.employees[i] = this.model2;
    this.msg="Updated field"
    this.model2={};
  }
}
 };

 
 closeAlert():void{
this.msg='';
};
}


