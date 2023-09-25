import { ElementRef, Renderer2 } from '@angular/core'
import { HoverHighlightDirective } from './hover-highlight.directive'

describe('HoverHighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverHighlightDirective(
      1 as unknown as ElementRef,
      2 as unknown as Renderer2
    )
    expect(directive).toBeTruthy()
  })
})
