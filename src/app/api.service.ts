import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURl: string = "https://jsonplaceholder.typicode.com/todos/500";

  constructor(private httpClient: HttpClient, private router: Router) { }
  get(): Observable<any> {
    // const data = {params: paramData, headers: this.getAuthHeaders()};
    return this.httpClient.get(this.baseURl).pipe(catchError(this.errorHandler.bind(this)));
  }
  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    const message = response.message;
    const status = response.status;
    if (status === 401) {
      this.router.navigate(['logout']);
      // this.alertService.message('Session Expired');
    }
    if (key === 'isTrusted') {
      // this.alertService.error('Please connect to internet Connection');
    } else {
      // this.alertService.error(message);
    }
    return throwError({message, error});
  }
}
