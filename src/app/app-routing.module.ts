import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForecastComponent } from './forecast/forecast.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forecast/:id', component: ForecastComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
