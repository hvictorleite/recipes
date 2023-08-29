import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleShow(): void {
    const element = this.elRef.nativeElement;

    this.isOpen = element.contains(event.target) ? !this.isOpen : false;
    const part = element.querySelector('.dropdown-menu');

    if (this.isOpen)
      this.renderer.addClass(part, 'show');
    else this.renderer.removeClass(part, 'show');
  }
}
