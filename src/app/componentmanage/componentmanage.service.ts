import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

    return this.http.get<ComponentCar[]>(host+"/carComponent");
}
  find(id:number): Observable<object>{
    let host = environment.host;
    return this.http.get(host+'/carComponent/'+id)
  }
  
  create(cm: ComponentCar): Observable<any> {
    let host = environment.host;
    return this.http.post(host+'/carComponent/', JSON.stringify(cm), this.httpOptions)
  }

  update(id:number, cm: ComponentCar): Observable<any> {
    let host = environment.host;
    return this.http.put(host + '/carComponent/' + id, JSON.stringify(cm), this.httpOptions)
  }
  delete(id:number){
    let host = environment.host;
    return this.http.delete(host + '/carComponent/' + id, this.httpOptions)
  }
}
