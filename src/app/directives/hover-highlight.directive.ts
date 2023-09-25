import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  private currentScale = 1

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'hover-effect')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hover-effect')
  }

  @HostListener('click') onClick() {
    if (this.currentScale < 3) {
      this.currentScale += 0.2
    } else {
      this.currentScale = 1
    }
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.currentScale})`)
  }
}
