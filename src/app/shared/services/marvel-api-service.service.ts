import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiServiceService {

  PUBLIC_KEY = '5848a5911735cf9d71998f0d7a1777b1';
  TS = '1631663200';
  HASH = '5a7afb760306f661bf25e09f664c65d7';
  URL_API = `https://gateway.marvel.com:443/v1/public/`;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<any>(`${this.URL_API}characters?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe();
  }

  getCreators(): Observable<any>{
    return this.http.get<any>(`${this.URL_API}creators?orderBy=middleName&ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe();
  }


}
