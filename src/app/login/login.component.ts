import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private apiService: ApiService) {}
  logIn() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  ngOnInit(): void {
       this.apiService.get().subscribe(data =>{
        console.log(data)
      });
     
  }

}
