import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() defaultOpen: boolean = false; // to pass value from calling 
  @HostBinding('class.open') isOpen: boolean;
  
  constructor() { }

  ngOnInit() {
    this.isOpen = this.defaultOpen;
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
