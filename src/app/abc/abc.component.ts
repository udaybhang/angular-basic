import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  userName = 'shagun';
  userId = 10;
  isButtonDisabled = false;

  constructor() { }
  
  getUserName() {
    return this.userName;
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
  ngOnInit(): void {
  }

}
