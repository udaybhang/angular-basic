import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
  @Output() editVideo = new EventEmitter<any>();
  
  constructor() { }

  onClick() {
    this.editVideo.emit(this.title);
  }
 

  ngOnInit(): void {
  }

}
