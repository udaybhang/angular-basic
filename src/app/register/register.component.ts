import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private apiService: ApiService) { }
  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.apiService.signUp(this.model).subscribe(data=>{
        console.log(data);
    },(error)=> {

    })
  }
  ngOnInit(): void {
  }

}
