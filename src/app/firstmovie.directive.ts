import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstmovie]'
})
export class FirstmovieDirective {

  @HostBinding('class.movie') myCustomStyle:boolean;

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.myCustomStyle = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.myCustomStyle = false;
  }
}
