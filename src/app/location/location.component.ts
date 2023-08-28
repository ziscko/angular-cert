import { Component, Input, OnInit } from '@angular/core'
import { WeatherService } from '../services/weather.service'
import { delay } from 'rxjs/operators'
import { isZipCode } from '../utils/helpers'
import { Router } from '@angular/router'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @Input() id: string | undefined
  @Input() locations: string[] | undefined

  weatherData: any

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.id && this.getWeatherForLocation(this.id)
  }

  getWeatherForLocation(location: string): void {
    this.weatherService
      .getCurrentWeather(location)

      .pipe(delay(100)) // For testing purposes

      .subscribe((data: any) => {
        this.weatherData = data
      })
  }

  getImage(image: string): string {
    if (image) {
      return image.replace('64x64', '128x128')
    }

    return 'https://www.angulartraining.com/images/weather/sun.png'
  }

  navigateForecast(): void {
    if (this.id && isZipCode(this.id)) {
      this.router.navigate(['/forecast', this.id])
    } else {
      this.router.navigate([
        '/forecast',
        this.weatherData.location.name + ' ' + this.weatherData.location.country,
      ])
    }
  }

  removeLocation(id: string | undefined): void {
    if (id && this.locations) {
      const index = this.locations.indexOf(id)
      if (index !== -1) {
        this.locations.splice(index, 1)
        localStorage.setItem('locations', JSON.stringify(this.locations))
      }
    }
  }
}
