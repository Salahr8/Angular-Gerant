import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../modul/client.model";
//pour qu'il soit un service
@Injectable({providedIn: "root"}) //disponible dans la rout de l'application
export class ClientsService {
    constructor(private http : HttpClient){

    }

    getAllClients():Observable<any[]>{
        let host = environment.host;
        return this.http.get<any[]>(host+"/clients");
    }

    searchClients(key:string):Observable<Client[]>{ 
        
        let host = environment.host;
        return this.http.get<Client[]>(host+"/clients?l_name_like="+key)
    }

    delete(client:Client):Observable<void>{ 
        let host = environment.host;
        return this.http.delete<void>(host+"/clients/"+client.id);
    }
    active(client:Client):Observable<void>{ 
        let host = environment.host;
        let id = {id: client.id}
        return this.http.post<void>(host+"/client/active", id);
    }
}