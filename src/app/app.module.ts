import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ForecastComponent } from './forecast/forecast.component'
import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './home/home.component'
import { LocationComponent } from './location/location.component'
import { WeatherService } from './services/weather.service'
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, ForecastComponent, HomeComponent, LocationComponent],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
