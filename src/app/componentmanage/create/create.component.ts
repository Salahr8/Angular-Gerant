import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Categorie } from '../categorie';
import { ComponentmanageService } from '../componentmanage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  stype:String="C";
  form!: FormGroup;
  idn!: number;
  categorieselected:String[]=[];
  constructor(public Service: ComponentmanageService,
              private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      id:new FormControl(0), 
      name: new FormControl('', Validators.required),
      type: new FormControl(''),
      picture: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price: new FormControl(0,Validators.required),
      numberPersonRate: new FormControl(0),
      discount: new FormControl(0,Validators.required),
      numberRate:new FormControl(0),
      quantity: new FormControl(0),
      Componentname: new FormControl(''),
      categories: new FormControl([]),
      typec: new FormControl(''),
      soustype: new FormControl('')
    }) 
    
    console.log(this.form.controls['categories']);
  }

  puton(refer:string){
    console.log("refer ", refer);
      let idn = this.seachid(refer);
      console.log("id: ", idn);
      if(this.verifyidcat(refer))
      this.categorieselected.push(environment.host+"/categories/"+idn);
  }



  verifyidcat(refer:string){
    for(let cat of this.categorieselected){
      if(cat==refer)
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
         if(cat.marque==refer)
             return cat.id;
       }
       return  0;
       
  }
   


  
  categories:Categorie[]=[
    {
      id: 1,
      marque: "BMW"       
    },
    {
      id: 2,
      marque: "Mercedes"       
    },
    {
      id: 3,
      marque: "Toyota"       
    }
  ]
  
  get f(){
    return this.form.controls;
  }


  submit(){

    if(this.f['typec'].value!="Choisir...",this.f['typec'].value!=""){
      this.stype=this.f['typec'].value;
       console.log("type ",this.stype);
      }
  
      if(this.f['soustype'].value!="Choisir..."&&this.f['soustype'].value!=""){
      this.stype=this.f['soustype'].value; 
      }
      
      this.f['type'].setValue(this.stype);
      this.f['Componentname'].setValue(this.stype);
      
    console.log(this.categorieselected);
    this.getcat().setValue(this.categorieselected);
    this.Service.create(this.form.value).subscribe((res:any) => {
    this.router.navigateByUrl('componentmanage/index');
    })
  }
   

  getid() {
  
    return this.form.get('id') as FormControl;
  }
  
  getcat(){
    return this.form.get('categories') as FormArray;
  }

  SousComponentsdata: SousComponent[]=[
    { 
    name: "Embrayage", 
    id: 1,
    type: "Moteur"
  },
  {
    name: "Turbo", 
    id: 2,
    type: "Moteur"
  },
  {
    name: "Injecteur", 
    id: 3,
    type: "Moteur"
  },
  {
    name: "Boujie", 
    id: 4,
    type: "Moteur"
  },
  {
    name: "Culasse", 
    id: 5,
    type: "Engine"
  },
  {
    name: "PotCatalytique", 
    id: 6,
    type: "échappement"
  },
  {
    name: "échappementsilencieux", 
    id: 7,
    type: "échappement"
  },
  {
    name: "Pneus", 
    id: 8,
    type: "Train-roulant"
  },
  {
    name: "Roulement", 
    id: 9,
    type: "Train-roulant"
  },
  {
    name: "Amortisseur", 
    id: 10,
    type: "Train-roulant"
  },
  {
    name: "Cardans", 
    id: 11,
    type: "Train-roulant"
  },
  {
    name: "Rotule", 
    id: 12,
    type: "Train-roulant"
  },
  {
    name: "Radiateur", 
    id: 13,
    type: "Chaufage"
  },
  {
    name: "PluseurDair", 
    id: 14,
    type: "Chaufage"
  },
  {
    name: "Thermostat", 
    id: 15,
    type: "Chaufage"
  },
  {
    name: "Sonde", 
    id: 16,
    type: "Chaufage"
  },
  {
    name: "Embrayage", 
    id: 17,
    type: "Freinage"
  },
  {
    name: "Disque", 
    id: 18,
    type: "Freinage"
  },
  {
    name: "Plaquettes", 
    id: 19,
    type: "Freinage"
  }
  ];
   
  Componentsdata: Componenttype[]=[
    { 
    name: "Engine", 
    id: 1,
    },
    { 
      name: "échappement", 
      id: 2,
    },
    { 
      name: "Train-roulant", 
      id: 3,
    },
    { 
      name: "Chaufage", 
      id: 4,
    },
    { 
      name: "Freinage", 
      id: 5,
    }
];

}

class SousComponent{
  name:string="";
  id: number=0;
  type:String="";
}

class Componenttype{
  name:string="";
  id: number=0;
}
