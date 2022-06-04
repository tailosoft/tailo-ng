import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CURRENCY_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CurrencyInputDirective),
  multi: true
};

@Directive({
  selector: '[tCurrencyInput]',
  providers: [CURRENCY_VALUE_ACCESSOR]
})
export class CurrencyInputDirective implements ControlValueAccessor {
  @Input() smallestUnitPerUnit = 100;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  registerOnChange(fn: (_: number|null) => void): void {
    this.onChange = (value) => { fn(value === '' ? null : parseFloat(value) * this.smallestUnitPerUnit); };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  writeValue(value: any): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value ? value / this.smallestUnitPerUnit : '');
  }

  @HostListener('change', ['$event']) change(event: any) {
    this.onChange(event.target.value);
  }

  @HostListener('input', ['$event']) input(event: any) {
    this.onChange(event.target.value);
  }

  @HostListener('blur') blur() {
    this.onTouched();
  }
}
