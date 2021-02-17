import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private apiService: ApiService, private router: Router) {}
  logIn() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.apiService.loginAndSetToken(this.model).subscribe(data=>{
        console.log(data);
    })
  } 
  register() {
   this.router.navigate(['sign-up'])
  }
  ngOnInit(): void {
       this.apiService.get().subscribe(data =>{
        // console.log(data)
      });
     
  }

}
