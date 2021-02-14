import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-data-in-event',
  templateUrl: './pass-data-in-event.component.html',
  styleUrls: ['./pass-data-in-event.component.css']
})
export class PassDataInEventComponent implements OnInit {

  userName = '';
  displayName = '';
  
  constructor() { }

  getUserName(data: any) {
    this.userName = data.target.value;
  }

  saveUserName() {
    this.displayName = this.userName;
  }
  ngOnInit(): void {
  }

}
