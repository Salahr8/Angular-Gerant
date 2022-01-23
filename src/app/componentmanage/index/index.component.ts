import { Component, OnInit, ViewChild } from '@angular/core';
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
   totalLength!: number;
  constructor(public componentmanageService : ComponentmanageService) { }

  ngOnInit(): void {
    this.componentmanageService.getComponent().subscribe((data: ComponentCar[] )=>{
      this.components =data;
      this.totalLength = this.components.length;
    }
    )
  }
  deletePost(id:number){

    this.componentmanageService.delete(id).subscribe(() => {
         this.components = this.components.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
