import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  @ViewChild('topnav') topnav: ElementRef;

  constructor() {}

  ngOnInit() {
 }

  toggle() {
    this.topnav.nativeElement.classList.toggle(['responsive']);
  }

}
