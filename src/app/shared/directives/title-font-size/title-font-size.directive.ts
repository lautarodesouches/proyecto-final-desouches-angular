import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appTitleFontSize]'
})
export class TitleFontSizeDirective {

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.fontSize = '20px'
  }

}
