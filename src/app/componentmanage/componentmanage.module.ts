import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentmanageRoutingModule } from './componentmanage-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentmanageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentmanageModule { }
