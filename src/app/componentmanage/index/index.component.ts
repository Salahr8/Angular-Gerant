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
  components: any;
  componentsf: ComponentCar[]=[];
   p: number = 1;
  infocat!:boolean;
  totalLength!: number;
  form!: FormGroup;
  stype:String="C";
  constructor(public componentmanageService : ComponentmanageService) { }

  ngOnInit(): void {
    this.componentmanageService.getComponent().subscribe((data: any )=>{
     this.infocat=false;
      this.componentsf=[];
      this.components= data._embedded;

      if(this.components.culasses!=null)
      this.componentsf=this.componentsf.concat(this.components.culasses);
      if(this.components.engines!=null)
      this.componentsf=this.componentsf.concat(this.components.engines);
      if(this.components.amortisseurs!=null)
      this.componentsf=this.componentsf.concat(this.components.amortisseurs);
      if(this.components.boujies!=null)
      this.componentsf=this.componentsf.concat(this.components.boujies);
      if(this.components.cabledefreins!=null)
      this.componentsf=this.componentsf.concat(this.components.cabledefreins);
      if(this.components.cardanss!=null)
      this.componentsf=this.componentsf.concat(this.components.cardanss);
      if(this.components.chaufages!=null)
      this.componentsf=this.componentsf.concat(this.components.chaufages);
      if(this.components.disques!=null)
      this.componentsf=this.componentsf.concat(this.components.disques);
      if(this.components.echappements!=null)
      this.componentsf=this.componentsf.concat(this.components.echappements);
      if(this.components.echappementsilencieus!=null)
      this.componentsf=this.componentsf.concat(this.components.echappementsilencieus);
      if(this.components.embrayages!=null)
      this.componentsf=this.componentsf.concat(this.components.embrayages);
      if(this.components.freinages!=null)
      this.componentsf=this.componentsf.concat(this.components.freinages);
      if(this.components.injecteurs!=null)
      this.componentsf=this.componentsf.concat(this.components.injecteurs);
      if(this.components.plaquettess!=null)
      this.componentsf=this.componentsf.concat(this.components.plaquettess);
      if(this.components.pluseurdairs!=null)
      this.componentsf=this.componentsf.concat(this.components.pluseurdairs);
      if(this.components.pneuss!=null)
      this.componentsf=this.componentsf.concat(this.components.pneuss);
      if(this.components.turbos!=null)
      this.componentsf=this.componentsf.concat(this.components.turbos);
      if(this.components.trainroulants!=null)
      this.componentsf=this.componentsf.concat(this.components.trainroulants);
      if(this.components.thermostats!=null)
      this.componentsf=this.componentsf.concat(this.components.thermostats);
      if(this.components.sondes!=null)
      this.componentsf=this.componentsf.concat(this.components.sondes);
      if(this.components.roulements!=null)
      this.componentsf=this.componentsf.concat(this.components.roulements);
      if(this.components.rotules!=null)
      this.componentsf=this.componentsf.concat(this.components.rotules);
      if(this.components.radiateurs!=null)
      this.componentsf=this.componentsf.concat(this.components.radiateurs);

      this.componentsf.sort((a,b)=> a.id-b.id);
        
      for(let i=0;i<this.componentsf.length;i++){
        this.componentmanageService.getcategorie(this.componentsf[i].id).subscribe((data:any)=>{
          this.componentsf[i].categories=data._embedded.categories;
     }) 
       
      }

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
         this.componentsf = this.componentsf.filter((item: { id: number; }) => item.id !== id);
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
  
    //  this.componentmanageService.searchbytypes(this.stype).subscribe((data: ComponentCar[] )=>{
    //     this.componentsf =data;
    //   this.totalLength = this.componentsf.length;
    //   }
    //  )


    this.componentmanageService.getComponent().subscribe((data: any )=>{
    
      this.components= data._embedded;
      this.componentsf=[];
    if(this.components.culasses!=null && this.stype=="Culasse"){
        console.log("culasse");
      this.componentsf=this.components.culasses;
    }
      if(this.components.engines!=null && this.stype=="Engine"){
        console.log("engine");
      this.componentsf=this.components.engines;
      }
      if(this.components.amortisseurs!=null && this.stype=="Amortisseur")
      this.componentsf=this.components.amortisseurs;
      if(this.components.boujies!=null && this.stype=="Boujie")
      this.componentsf=this.components.boujies;
      if(this.components.cabledefreins!=null && this.stype=="Cabledefreins")
      this.componentsf=this.components.cabledefreins;
      if(this.components.cardanss!=null  && this.stype=="Cardans")
      this.componentsf=this.components.cardanss;
      if(this.components.chaufages!=null && this.stype=="Chauffage")
      this.componentsf=this.components.chaufages;
      if(this.components.disques!=null && this.stype=="Disque")
      this.componentsf=this.components.disques;
      if(this.components.echappements!=null && this.stype=="Echappement")
      this.componentsf=this.components.echappements;
      if(this.components.echappementsilencieus!=null && this.stype=="EchappementSilencieu")
      this.componentsf=this.components.echappementsilencieus;
      if(this.components.embrayages!=null && this.stype=="Embrayage")
      this.componentsf=this.components.embrayages;
      if(this.components.freinages!=null && this.stype=="Freinage")
      this.componentsf=this.components.freinages;
      if(this.components.injecteurs!=null && this.stype=="Injecteur")
      this.componentsf=this.components.injecteurs;
      if(this.components.plaquettess!=null && this.stype=="Plaquettes")
      this.componentsf=this.components.plaquettess;
      if(this.components.pluseurdairs!=null && this.stype=="PluseurDairs")
      this.componentsf=this.components.pluseurdairs;
      if(this.components.pneuss!=null && this.stype=="Pneus" )
      this.componentsf=this.components.pneuss;
      if(this.components.turbos!=null && this.stype=="Turbo")
      this.componentsf=this.components.turbos;
      if(this.components.trainroulants!=null && this.stype=="TrainRoulant")
      this.componentsf=this.components.trainroulants;
      if(this.components.thermostats!=null && this.stype=="Thermostat")
      this.componentsf=this.components.thermostats;
      if(this.components.sondes!=null && this.stype=="Sonde")
      this.componentsf=this.components.sondes;
      if(this.components.roulements!=null && this.stype=="Roulement")
      this.componentsf=this.components.roulements;
      if(this.components.rotules!=null && this.stype=="Rotule")
      this.componentsf=this.components.rotules;
      if(this.components.radiateurs!=null && this.stype=="Radiateur")
      this.componentsf=this.components.radiateurs;

      this.componentsf.sort((a,b)=> a.id-b.id);
    })
  
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

function stype(stype: any) {
  throw new Error('Function not implemented.');
}
