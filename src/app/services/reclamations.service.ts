import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Reclamation } from "../modul/reclamation.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ReclamationService{
    constructor(private http : HttpClient){
    }
    getAllReclamations():Observable<Reclamation[]>{
        let host = environment.host;
        return this.http.get<Reclamation[]>(host+"/reclamations")
    }
}