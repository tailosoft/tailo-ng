import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getNumberOfCurrencyDigits } from '@angular/common';

export const CURRENCY_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CurrencyInputDirective),
  multi: true
};

const DEFAULT_SMALLEST_UNIT_PER_UNIT = 100; // since in angular DEFAULT_NB_OF_CURRENCY_DIGITS = 2;

@Directive({
  selector: '[tCurrencyInput]',
  providers: [CURRENCY_VALUE_ACCESSOR],
  standalone: true,
})
export class CurrencyInputDirective implements ControlValueAccessor {
  _smallestUnitPerUnit = DEFAULT_SMALLEST_UNIT_PER_UNIT;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  @Input()
  set smallestUnitPerUnit(value: number | null | undefined) {
    this._smallestUnitPerUnit = value ?? DEFAULT_SMALLEST_UNIT_PER_UNIT;
  }

  get smallestUnitPerUnit(): number {
    return this._smallestUnitPerUnit;
  }

  @Input()
  set code(value: string) {
      this._smallestUnitPerUnit = 10**getNumberOfCurrencyDigits(value);
  }

  ngOnChanges() {
    this.onChange(this.elementRef.nativeElement.value);
    this.cd.detectChanges();
  }

  registerOnChange(fn: (_: number|null) => void): void {
    this.onChange = (value) => {
      fn(value ? parseFloat(value) * this.smallestUnitPerUnit : value);
    };
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
