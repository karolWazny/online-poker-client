import {AfterContentInit, AfterViewInit, Directive, ElementRef, inject, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[suit]'
})
export class SuitDirective implements AfterContentInit, AfterViewInit {

  @Input() suit!: string;
  private el = inject(ElementRef);

  constructor() {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.suit = this.suit
  }

  ngAfterContentInit(): void {
    this.el.nativeElement.suit = this.suit
  }
}
