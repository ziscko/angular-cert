import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForecastComponent } from './components/forecast/forecast.component'
import { HomeComponent } from './components/home/home.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forecast/:id', component: ForecastComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
