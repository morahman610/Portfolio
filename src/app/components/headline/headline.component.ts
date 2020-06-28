import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  profileImg = 'assets/Images/IMG_3593.jpg'
  headlineImg = "assets/Images/headline-background.jpg"

  constructor() { }
  
  ngOnInit(): void {
  }

}
