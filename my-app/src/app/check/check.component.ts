import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  mark:number=45;
  
  salary:number=50000;

  mark2:number=0;
  salary2:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
