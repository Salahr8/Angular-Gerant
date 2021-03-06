import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ClientsComponent} from './components/clients/clients.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { UpNavBarComponent } from './component/up-nav-bar/up-nav-bar.component';
import { IndexComponent } from './componentmanage/index/index.component';
import { CreateComponent } from './componentmanage/create/create.component';
import { EditComponent } from './componentmanage/edit/edit.component';
import { ViewComponent } from './componentmanage/view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatistiqueComponent } from './component/statistique/statistique.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ClientsComponent,
    ReclamationComponent,
    AppComponent,
    UpNavBarComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    StatistiqueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
