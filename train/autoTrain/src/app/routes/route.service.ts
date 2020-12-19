import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { FormSaveService } from "../input-stuff/form-save.service";
import { Route } from "./route";

@Injectable({
  providedIn: "root",
})
export class RouteService {
  constructor(
    private http: HttpClient,
    private formSaveService: FormSaveService
  ) {}

  private routesUrl = `https://www.rail.co.il/apiinfo/api/Plan/GetRoutes?OId=${this.formSaveService.form.from}&TId=${this.formSaveService.form.to}&Date=${this.formSaveService.date}&Hour=${this.formSaveService.hour}&isGoing=true&c=1608308139353`;

  getRoutes(): Observable<Route[]> {
    return this.http.get<any>(this.routesUrl).pipe(
      map((data) => data.Data.Routes),
      tap((data) => console.log(data))
    );
  }
}
