import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-up-nav-bar',
  templateUrl: './up-nav-bar.component.html',
  styleUrls: ['./up-nav-bar.component.css']
})
export class UpNavBarComponent implements OnInit {

  constructor(public app:AppComponent) {
  }
  ngOnInit(): void {
  }
   myInfo:boolean=true;

}
