import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentmanageRoutingModule } from './componentmanage-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ComponentmanageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentmanageModule { }
