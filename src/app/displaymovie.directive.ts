import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplaymovie]'
})
export class DisplaymovieDirective {

  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

  @Input() set appDisplaymovie(condition:boolean){
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef);
    }
    else{
      this.vwRef.clear();
    }
  }

}
