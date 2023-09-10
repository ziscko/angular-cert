import { Component, Input, OnInit } from '@angular/core'
import { delay } from 'rxjs/operators'
import { Router } from '@angular/router'
import { WeatherData } from 'src/app/interfaces/weather-interfaces'
import { WeatherService } from 'src/app/services/weather.service'
import { isZipCode } from 'src/app/utils/helpers'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @Input() id: string | undefined
  @Input() locations: string[] | undefined

  weatherData: WeatherData | undefined

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.id && this.getWeatherForLocation(this.id)
  }

  getWeatherForLocation(location: string): void {
    this.weatherService
      .getCurrentWeather(location)

      .pipe(delay(100)) // For testing purposes

      .subscribe((data: WeatherData) => {
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
    } else if (this.weatherData) {
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
