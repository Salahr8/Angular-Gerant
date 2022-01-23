import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentmanageService } from '../componentmanage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;

  constructor(public Service: ComponentmanageService,
              private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      categories: new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.Service.create(this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('componentmanage/index');
    })
  }


}
