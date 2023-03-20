import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'aqua'); /*Renderer is a better approch to access the element becuase 
      angular is not limited to just running in the browser, eg it also works with service workers, these are environments 
      where you might not have access to the DOM so it is better to use the methods provided by Renderer to access the DOM */
  }

}
