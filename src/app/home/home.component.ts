import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  onEdit(e:any) {
    alert('output event fired'+e);
  }
  ngOnInit(): void {
  }

}
