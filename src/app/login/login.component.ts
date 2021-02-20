import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from '../api.service';
import { AuthUtil } from "../../app/utility/auth-util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedinData: any;
  constructor(private spinner: NgxSpinnerService, private apiService: ApiService, private router: Router,@Inject(PLATFORM_ID) private platformId: any) {}
  logIn() {
    this.spinner.show();
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.apiService.loginAndSetToken(this.model).subscribe(res=>{
        this.loggedinData =  res.user;
        if (isPlatformBrowser(this.platformId)) {
          AuthUtil.setAuthToken(res.token);
          this.spinner.hide();
        }
        this.router.navigate(['verify'], {queryParams: {email: this.loggedinData.email}})
        
    })
  } 
  register() {
   this.router.navigate(['sign-up'])
  }
  ngOnInit(): void {
       this.apiService.get().subscribe(data =>{
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      });
     
  }

}
