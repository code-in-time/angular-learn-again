import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  clickCounter = 0;

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

}
