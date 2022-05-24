import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
 title:string="welcome to future lets enjoy tonight with bear";

 good:string="color:red;background-color:aqua;";

  constructor() { }
  ngOnInit(): void {
  }

}
