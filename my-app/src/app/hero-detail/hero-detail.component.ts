import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public username:number=0;
  public username2:number=0;
  public add:number=0;

  fun(){
    this.add=this.username+this.username2;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
