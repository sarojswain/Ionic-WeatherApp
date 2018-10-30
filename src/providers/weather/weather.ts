import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apiKey = '996b2966228949fa8a4141409180609';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key=996b2966228949fa8a4141409180609&q=Paris';
  }

  getWeather(){
    return this.http.get(this.url)
           .map(res => res);
           
  }

}
