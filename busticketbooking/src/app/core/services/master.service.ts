import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable} from 'rxjs';
import {formInputType} from '../../../../types';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getLocations() : Observable<any[]>{
    return this.http.get<any[]>(environment.apiURL + 'GetBusLocations');
  }

  searchBuses(from: formInputType, to: formInputType, date: formInputType) : Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiURL}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${date}`);
  }

  getScheduleById(id : number){
    return this.http.get<any>(`${environment.apiURL}getScheduleById?id=${id}`);
  }

}
