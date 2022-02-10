import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { ComponentCar } from '../componentCar.model';
import { ComponentmanageService } from '../componentmanage.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  id: number=1;
  carc: ComponentCar={
    id:0,
    name:"",
    description:"",
    price:0,
    type:"",
    picture:"",
    discount:0,
    quantity:0,
    numberPersonRate:0,
    numberRate:0,
    Componentname:"",
    categories:[]
  }; 
  categories: any[]=[];
  constructor(public service:ComponentmanageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idc'];
    this.service.find(this.id).subscribe((data: any)=>{
      this.carc = data;
      console.log(data);
      console.log("dfd",this.carc);
       })
    console.log("the id is: ",this.id);
    this.service.getcategorie(this.id).subscribe((data:any)=>{
         console.log("embedded :",data._embedded);
         this.categories=data._embedded.categories;
         console.log("categories :",this.categories);
    })
     console.log("dd",this.categories)

  }

}
