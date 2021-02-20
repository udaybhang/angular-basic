import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private apiService: ApiService, private spin: NgxSpinnerService) {
    
   }
   
  register(form: NgForm) {
    this.spin.show()
    if (form.invalid) {
      this.spin.hide()
      return;
    }

    this.apiService.signUp(this.model).subscribe(data=>{
        this.spin.hide()
    },(error)=> {

    })
  }
  ngOnInit(): void {
  }

}
