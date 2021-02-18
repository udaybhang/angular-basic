import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURl: string = "https://jsonplaceholder.typicode.com/todos/111";
  URL: String = 'http://localhost:3006/api/user';
  constructor(private httpClient: HttpClient, private alertService: AlertService, @Inject(PLATFORM_ID) private platformId: any, private router: Router) { }
  get(): Observable<any> {
    // const data = {params: paramData, headers: this.getAuthHeaders()};
    return this.httpClient.get(this.baseURl).pipe(catchError(this.errorHandler.bind(this)));
  }

  signUp(obj:any) {
    console.log(obj)
    return this.httpClient.post(this.URL + '/signUp', obj).pipe(catchError(this.errorHandler.bind(this)));
  }

  loginAndSetToken(data: { email:string, password: string }): Observable<any> {
    let queryParam = `?email=${data.email}&password=${data.password}`;
      return this.httpClient.get(this.URL + '/login' + queryParam).pipe(catchError(this.errorHandler.bind(this)));
}

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
   
    const key = keys[0];
    const message = error.message;
    const systemGeneratedStatusVode = error.status;
    const status = response.status;
    if (status === 401) {
      this.router.navigate(['']);
      this.alertService.message('Session Expired');
    }
    if (key === 'isTrusted') {
      this.alertService.error('Please connect to internet Connection');
    } 
    else {
     
      this.alertService.error(message);
    }
    return throwError({message, error});
  }
}
