import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modul/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients?:Client[];
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
  }
  onGetAllClients(){
    this.clientsService.getAllClients().subscribe((data:any) => {
      this.clients=data._embedded.clients;
    })
  }
  onSearch(value: any){
    this.clientsService.searchClients(value.keyword).subscribe(data=>{
      this.clients=data;
    })
  }
  onDelet(c: Client){
    let test = confirm("tu es sure ?");
    if(test){
      this.clientsService.delete(c).subscribe(
        data => {
          this.onGetAllClients();
        }
      )
    }
  }
}
