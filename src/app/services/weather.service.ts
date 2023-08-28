import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'xxxxxxxxxxxxxxx' //https://www.weatherapi.com/

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<any> {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}&aqi=no`
    return this.http.get(apiUrl)
  }

  getForecast(location: string): Observable<any> {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${location}&days=5&aqi=no&alerts=no`
    return this.http.get(apiUrl)
  }
}
