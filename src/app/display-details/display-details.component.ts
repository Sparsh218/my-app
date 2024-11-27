import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {

  showText = true;
  toggleLog = [];

  constructor() {
    this.toggleLog.push('Display On default');
  }

  toggleDisplayText() {
    this.showText = !this.showText;
    this.toggleLog.push('Display '+(this.showText?'On':'Off')+' manual');
  }

  getLogTextColor(index: any) {
    return (index >= 5) ? 'white' : 'black';
  }

}
