import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { WeatherService } from '../../services/weather.service'
import { isZipCode } from '../../utils/helpers'
import { ForecastData } from 'src/app/interfaces/forecast-interfaces'
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  id: string = ''
  hasZipCode: boolean = false
  forecastData: ForecastData | undefined

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params && params['id']) {
        this.id = params['id']
        this.hasZipCode = isZipCode(this.id)
        this.getForecastData()
      }
    })
  }

  getForecastData() {
    this.weatherService
      .getForecast(this.id)
      .pipe(delay(300)) // For testing purposes
      .subscribe((data: ForecastData) => {
        this.forecastData = data
      })
  }

  navigateBack(): void {
    this.router.navigate(['/'])
  }
}
