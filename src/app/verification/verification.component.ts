import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  email:any = "";
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }
  fetchme() {
    this.apiService.fetchMe().subscribe(data=>{
     this.email = data.email;
    })
  }
  ngOnInit(): void {
    this.fetchme();
    const params$ = this.activatedRoute.queryParams;
    params$.subscribe(data=> {
      this.email  = data.email;
    })
  }

}
