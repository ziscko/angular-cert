import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ForecastComponent } from './components/forecast/forecast.component'
import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './components/home/home.component'
import { LocationComponent } from './components/location/location.component'
import { WeatherService } from './services/weather.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { BackgroundCloudsComponent } from './components/background-clouds/background-clouds.component'
import { IconPipe } from './pipes/icon.pipe'
import { HoverHighlightDirective } from './directives/hover-highlight.directive'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ForecastComponent,
    HomeComponent,
    LocationComponent,
    BackgroundCloudsComponent,
    IconPipe,
    HoverHighlightDirective,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
