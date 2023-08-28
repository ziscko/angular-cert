import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  locations: string[] = []
  newLocation: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedLocations = localStorage.getItem('locations')

    if (storedLocations) {
      this.locations = JSON.parse(storedLocations)
    }
  }

  navigateToLondon() {
    this.router.navigate(['/forecast', 'london'])
  }

  addLocation(value: string) {
    if (this.locations.length < 5 && value.trim() !== '') {
      this.locations.push(value)
      localStorage.setItem('locations', JSON.stringify(this.locations))
    }
    this.newLocation = ''
  }
}
