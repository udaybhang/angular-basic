import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;
  borrowersInfo:any;
  data:any = [{
    name:'udaybhan',
    age:30
  },
{
  name:'amrita',
  age:22
}]
  openModal(template: TemplateRef<any>, details?:any) {
    this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'modal-sm modal-dialog-centered'}))
  }
  ngOnInit(): void {
    this.borrowersInfo = this.data;
  }

}
