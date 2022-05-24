import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target1',
  templateUrl: './target1.component.html',
  styleUrls: ['./target1.component.css']
})
export class Target1Component implements OnInit {

 lave:string="mithu";
 hite:number=200;
 jai:boolean=true;

  constructor() { }
  ngOnInit(): void {
  }
}
