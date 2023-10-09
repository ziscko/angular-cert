import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  locations: string[] = []
  newLocation: string = ''

  constructor(private router: Router, private toastr: ToastrService) {}

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
    if (!value) {
      return
    } else if (this.locations.length < 5) {
      this.locations.push(value)
      localStorage.setItem('locations', JSON.stringify(this.locations))
    } else {
      this.toastr.warning('You can add a maximum of 5 locations', 'Warning', {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-bottom-right',
        timeOut: 2000,
      })
    }
    this.newLocation = ''
  }

  onLocationRemoved(locationID: string) {
    this.toastr.success(`${locationID} deleted`, 'Success', {
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 2000,
    })
  }
}
