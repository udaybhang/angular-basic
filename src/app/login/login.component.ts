import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm: FormGroup | undefined;
  logIn() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  ngOnInit(): void {
  }

}
