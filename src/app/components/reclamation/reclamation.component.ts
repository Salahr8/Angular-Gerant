import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/modul/reclamation.model';
import { ReclamationService } from 'src/app/services/reclamations.service';
import { ComposantQuantity } from 'src/app/modul/composantQuantity.model';
import { ComposantQuantityService } from 'src/app/services/composantQuantities.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations?:ComposantQuantity[];
  moreDetails=false;
  detailsReclamation!:ComposantQuantity;
  constructor(public composantQuantityService:ComposantQuantityService) { }

  ngOnInit(): void {
  }
  onGetAllReclamation(){ 
    this.composantQuantityService.getAllComposantQuantity().subscribe(data => {
        this.reclamations = data;
      });
  }
  onSearch(value : string){
  }
  onSelect(c:ComposantQuantity){
    this.moreDetails = true;
    this.detailsReclamation = c;
  }
}
