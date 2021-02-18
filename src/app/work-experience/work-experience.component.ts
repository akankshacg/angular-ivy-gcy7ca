import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }
  fieldArray: Array<any> = [];
  newAttribute: any = {}; 
  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }
  ngOnInit(): void {
  }

}
