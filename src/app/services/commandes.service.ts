import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Commande } from "../modul/commande.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class CommandeService{
    constructor(private http : HttpClient){
    }
    getAllCommandes():Observable<Commande[]>{
        let host = environment.host;
        return this.http.get<Commande[]>(host+"/commandes")
    }
}