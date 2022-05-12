import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home-page',
  templateUrl: './page-home-page.component.html',
  styleUrls: ['./page-home-page.component.scss']
})
export class PageHomePageComponent implements OnInit {
  location: any;  // or [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
