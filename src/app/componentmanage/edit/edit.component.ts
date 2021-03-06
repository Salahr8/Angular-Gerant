import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCar } from '../componentCar.model';
import { ComponentmanageService } from '../componentmanage.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public Service: ComponentmanageService,
              private route:ActivatedRoute,
              private router: Router) { }
  id!: number;

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
  form!: FormGroup;

  ngOnInit(): void {
    this.id =this.route.snapshot.params['idc'];
    this.Service.find(this.id).subscribe((data: any)=>{
      this.carc=data;
    });
    
    this.form= new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      picture: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      numberPersonRate: new FormControl(''),
      discount: new FormControl('',Validators.required),
      numberRate:new FormControl(''),
      quantity: new FormControl(''),
      Componentname: new FormControl('')
    })
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.Service.update(this.id, this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('componentmanage/index');
    })
  }

}
