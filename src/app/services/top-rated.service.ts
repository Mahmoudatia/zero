import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TVService {

  constructor(private _http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this._http.get<any>(url)
  }
}
