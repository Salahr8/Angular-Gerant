import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from './categorie';
import { ComponentCar } from './componentCar.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentmanageService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient){}

  getComponent():Observable<ComponentCar[]>{
    let host = environment.host;

    return this.http.get<ComponentCar[]>(host+"/composants");
  }

     find(id:number): Observable<ComponentCar>{
      let host = environment.host;
      return this.http.get<ComponentCar>(host+"/composants/"+id)
     }
  
      create(cm: ComponentCar): Observable<any> {
        let host = environment.host;
        return this.http.post(host+"/composants/", JSON.stringify(cm), this.httpOptions)
    }

    getcategorie(id:number): Observable<any> {
      let host = environment.host;
      return this.http.get(host+"/composants/"+id+"/categories")
  }

     update(id:number, cm: ComponentCar): Observable<any> {
        let host = environment.host;
       return this.http.put(host + '/composants/' + id, JSON.stringify(cm), this.httpOptions)
     }
    delete(id:number){
      let host = environment.host;
      return this.http.delete(host + '/composants/' + id, this.httpOptions)
      }
    searchbytypes(type:String):Observable<ComponentCar[]>{
       let host = environment.host;
       return this.http.get<ComponentCar[]>(host+"/composants/?Componentname="+type); 
   }
}
