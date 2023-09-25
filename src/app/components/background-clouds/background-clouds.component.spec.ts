import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BackgroundCloudsComponent } from './background-clouds.component'

describe('BackgroundCloudsComponent', () => {
  let component: BackgroundCloudsComponent
  let fixture: ComponentFixture<BackgroundCloudsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundCloudsComponent],
    })
    fixture = TestBed.createComponent(BackgroundCloudsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
