import { Injectable } from '@angular/core';
import { Soccer } from './soccer';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { soccerArr } from '../model/soccer-Data';

@Injectable({
  providedIn: 'root'
})

export class SoccerService {
  
  soccerUrl = 'api/soccerList';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllSoccersHttp(): Observable<Soccer[]> {
    return this.http.get<Soccer[]>(this.soccerUrl);
  }
  getSoccerHttp(id): Observable<Soccer> {
    const url = `${this.soccerUrl}/${id}`;
    return this.http.get<Soccer>(url);
  }
  getSoccer(id) : Soccer {
    return soccerArr[id]; 
  }

}
