import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCar } from '../componentCar.model';
import { ComponentmanageService } from '../componentmanage.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  id! : number;
  carc!: ComponentCar; 
  
  constructor(public service:ComponentmanageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idc'];
        
    this.service.find(this.id).subscribe((data: any)=>{
      this.carc = data;
    });
  }

}
