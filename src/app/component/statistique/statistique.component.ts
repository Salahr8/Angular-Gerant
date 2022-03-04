import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { productSales, productSalesMulti } from '../products';


@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  productSales:any[] | undefined;
  productSalesMulti:any[] | undefined;
  constructor() { Object.assign(this, {productSales,productSalesMulti}) }

  ngOnInit(): void {
   

}
}
