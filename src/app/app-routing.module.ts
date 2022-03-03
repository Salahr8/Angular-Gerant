import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './componentmanage/create/create.component';
import { EditComponent } from './componentmanage/edit/edit.component';
import { IndexComponent } from './componentmanage/index/index.component';
import { ViewComponent } from './componentmanage/view/view.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';

const routes: Routes = [
  { path: 'componentmanage', redirectTo: 'componentmanage/index', pathMatch: 'full'},
  { path: 'componentmanage/index', component: IndexComponent},
  { path: 'componentmanage/create', component: CreateComponent },
  { path: 'clientmanage', component: ClientsComponent },
  { path: 'réclamationmanage', component: ReclamationComponent },
  { path: 'componentmanage/:idc/edit', component: EditComponent },
  { path: 'componentmanage/:idc/view', component: ViewComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
