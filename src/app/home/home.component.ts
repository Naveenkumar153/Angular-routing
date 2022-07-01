import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToServer(id:number){
    console.log(this.router);
    this.router.navigate(['/servers',id,'edit'],{queryParams:{page:1},fragment:'loading'},);
  }

}
