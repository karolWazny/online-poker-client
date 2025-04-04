import {AfterContentInit, AfterViewInit, Directive, ElementRef, inject, Input} from '@angular/core';

@Directive({
  selector: '[rank]'
})
export class RankDirective implements AfterContentInit, AfterViewInit {

  @Input() rank!: string;
  private el = inject(ElementRef);

  constructor() {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.rank = this.rank
  }

  ngAfterContentInit(): void {
    this.el.nativeElement.rank = this.rank
  }
}
