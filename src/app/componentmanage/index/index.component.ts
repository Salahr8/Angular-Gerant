import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentCar } from '../componentCar.model';
import { ComponentmanageService } from '../componentmanage.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  components: ComponentCar[]=[];
   p: number = 1;
  infocat!:boolean;
  totalLength!: number;
  form!: FormGroup;

  stype:String="C";
  constructor(public componentmanageService : ComponentmanageService) { }

  ngOnInit(): void {
    this.componentmanageService.getComponent().subscribe((data: ComponentCar[] )=>{
      this.components =data;
      this.totalLength = this.components.length;
    }
    )

    this.form= new FormGroup({
      type: new FormControl('', Validators.required),
      soustype: new FormControl('')
    })
  }

  initialiser() { this.f['type'].patchValue(""); this.ngOnInit();  }


  deletePost(id:number){

    this.componentmanageService.delete(id).subscribe(() => {
         this.components = this.components.filter(item => item.id !== id);
    })
  }

  get f(){
    return this.form.controls;
  }
  
  submit() {
    if(this.f['type'].value!="Choisir...",this.f['type'].value!=""){
    this.stype=this.f['type'].value;
     console.log("type ",this.stype);
    }

    if(this.f['soustype'].value!="Choisir..."&&this.f['soustype'].value!=""){
    this.stype=this.f['soustype'].value; 
      }
  
    this.componentmanageService.searchbytypes(this.stype).subscribe((data: ComponentCar[] )=>{
      this.components =data;
      this.totalLength = this.components.length;
    }
    )
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
    type: "Moteur"
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
    name: "Moteur", 
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

function stype(stype: any) {
  throw new Error('Function not implemented.');
}
