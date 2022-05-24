import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  style1:string="color:red;background-color:blue";
  style2:string="color:black;background-color:orange";
  style3:string="color:brown;background-color:pink";
  style4:string="color:green;background-color:yellow";
  style5:string="color:black;background-color:red";


  title='Lets calculate the numbers and enjoy ';

  public num1:number=0;
  public num2:number=0;
  public num3:number=0;

  add(){
    this.num3=this.num1+this.num2;
  }
  sub(){
    this.num3=this.num1-this.num2;
  }
  div(){
    this.num3=this.num1/this.num2;
  }
  mult(){
    this.num3=this.num1*this.num2;
  }
  fun(){
    console.log("hello lets try");
    document.write("trying calculator done");
  }
  constructor() { }
  ngOnInit(): void {
  }

}
