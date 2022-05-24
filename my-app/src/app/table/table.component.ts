import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  lineswidth:number=3;
  merge:number=2;

  
  gres:number=5;
  res:number=3;
  hjk:string="color: red;background-color: aqua;";




  constructor() { }

  ngOnInit(): void {
  }

}

