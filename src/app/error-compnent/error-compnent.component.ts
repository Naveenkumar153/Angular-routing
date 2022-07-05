import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-compnent',
  templateUrl: './error-compnent.component.html',
  styleUrls: ['./error-compnent.component.css']
})
export class ErrorCompnentComponent implements OnInit {
  errorMessage:any;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.data.subscribe((data:Data) => {
      this.errorMessage = data
    })
  }

}
