import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  myMethod() {
    return console.log('hey, what is going on!')
  }

  getBeer() {
    return this._httpClient.get('https://api.openbrewerydb.org/breweries')
  }

}
