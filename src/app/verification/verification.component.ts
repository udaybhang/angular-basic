import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  email:any = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params$ = this.activatedRoute.queryParams;
    params$.subscribe(data=> {
      console.log(data);
      this.email  = data.email;
    })
  }

}
