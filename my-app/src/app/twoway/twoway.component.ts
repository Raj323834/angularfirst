import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  name:string="Rahul";
  name2:string="name";
 fun(){
   console.log(this.name2);
 }

  title:string="This is My Title";
  constructor() { }
 ngOnInit(): void {
  }

}
