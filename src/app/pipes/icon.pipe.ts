import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {
  transform(image: string): string {
    if (image) {
      return image.replace('64x64', '128x128')
    }

    return 'https://www.angulartraining.com/images/weather/sun.png'
  }
}
