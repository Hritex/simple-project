import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') bkgColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'aqua'); 
      /* Renderer is a better approch to access the element becuase 
      angular is not limited to just running in the browser, eg it also works with service workers, these are environments 
      where you might not have access to the DOM so it is better to use the methods provided by Renderer to access the DOM */
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'aqua');
    this.bkgColor = 'aqua';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.bkgColor = 'transparent';
  }
}
