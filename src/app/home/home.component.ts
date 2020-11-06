import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  clickCounter = 0;
  name: string = 'my name';

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    return {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
  }

}
