import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { ComponentmanageService } from '../componentmanage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;
  idn!: number;
  categorieselected:Categorie[]=[];

  constructor(public Service: ComponentmanageService,
              private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      picture: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price: new FormControl(0,Validators.required),
      categories: new FormControl(''),
      numberPersonRate: new FormControl(0),
      discount: new FormControl(0,Validators.required),
      numberRate:new FormControl(0),
      quantity: new FormControl(0)
    }) 
    console.log(this.form.controls['categories']);
  }

  puton(refer:string){
    console.log("refer ", refer);
      let idn = this.seachid(refer);
      console.log("id: ", idn);
      if(this.verifyidcat(idn))
      this.categorieselected.push({
        id: idn,
        reference: refer
      }
      );
      
  }

  verifyidcat(num:number){
    for(let cat of this.categorieselected){
      if(cat.id==num)
          return false;
    }
    return  true;
  }





  seachid(refer:string){
   /*     this.categories.forEach.bind((category:any)=> {
        console.log("refer ",category.reference );
          if(category.reference===refer) {
                   id=category.id;
          }
       }) */
       for(let cat of this.categories){
         if(cat.reference==refer)
             return cat.id;
       }
       return  0;
       
  }
   


  
  categories:Categorie[]=[
    {
      id: 1,
      reference: "skooda"       
    },
    {
      id: 2,
      reference: "audi"       
    },
    {
      id: 3,
      reference: "BMW"       
    },
    {
      id: 4,
      reference: "Mercedes"       
    },
    {
      id: 5,
      reference: "Renault"       
    }
  ]

  get f(){
    return this.form.controls;
  }



  submit(){
    console.log(this.categorieselected);
    this.get().setValue(this.categorieselected);
    this.Service.create(this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('componentmanage/index');
    })
  }
   
  getControls() {
    return (this.form.get('categories') as FormArray).controls;
  }
  get() {
  
    return this.form.get('categories') as FormArray ;
  }
  
  onChanges(): void {
    this.get().valueChanges.subscribe((value: { name: any; }[]) => {
      this.categories.push({
        reference: value[0].name,
         id: Math.floor(Math.random() * 100 + 1)
      });
    });
  }

}
