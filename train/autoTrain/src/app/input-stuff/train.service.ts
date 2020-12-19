import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Station } from "../station";

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { }


  private stationsUrl = 'https://www.rail.co.il/apiinfo/api/Plan/';

  getStations(): Observable<Station[]> {
    return this.http.get<any>(this.stationsUrl)
      .pipe(
        map(data => data.Data.CustomPropertys),
        tap(data => console.log(data)),
    );
  }
}
