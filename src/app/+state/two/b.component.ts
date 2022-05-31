import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
@Input() modalRef: any;
@Input() borrowersInfo: any;
addExceptionRef: BsModalRef | undefined
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
this.addExceptionRef = this.modalService.show(template, Object.assign({}, {class:'modal-md'}));
  }
  ngOnInit(): void {
  }

}
