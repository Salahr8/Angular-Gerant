import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComposantQuantity } from "../modul/composantQuantity.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ComposantQuantityService{
    constructor(private http : HttpClient){
    }
    getAllComposantQuantity():Observable<ComposantQuantity[]>{
        let host = environment.host2;
        return this.http.get<ComposantQuantity[]>(host+"/ComposantQuantities")
    }
}