import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { WeatherData } from '../interfaces/weather-interfaces'
import { ForecastData } from '../interfaces/forecast-interfaces'

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiURL = 'https://api.weatherapi.com/v1/'
  private apiKey = 'xxxxxxxxxxxxxxx' //https://www.weatherapi.com/

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<WeatherData> {
    const apiUrl = `${this.apiURL}current.json?key=${this.apiKey}&q=${location}&aqi=no`
    return this.http.get<WeatherData>(apiUrl)
  }

  getForecast(location: string): Observable<ForecastData> {
    const apiUrl = `${this.apiURL}forecast.json?key=${this.apiKey}&q=${location}&days=5&aqi=no&alerts=no`
    return this.http.get<ForecastData>(apiUrl)
  }
}
