import { Pipe } from '@angular/core';
import { CurrencyPipe as NgCurrencyPipe, getNumberOfCurrencyDigits } from '@angular/common';

/**
 * This pipe extends the default angular currency pipe but expect to inout value to be in the smallest possible unit (ex: cents for USD)
 */
@Pipe({
  name: 'tCurrency',
  standalone: true
})
export class CurrencyPipe extends NgCurrencyPipe {

  override transform(
    value: number|string, currencyCode?: string,
    display?: 'code'|'symbol'|'symbol-narrow'|string|boolean, digitsInfo?: string,
    locale?: string): string|null;
  override transform(
    value: null|undefined, currencyCode?: string,
    display?: 'code'|'symbol'|'symbol-narrow'|string|boolean, digitsInfo?: string,
    locale?: string): null;
  override transform(
    value: number|string|null|undefined, currencyCode?: string,
    display?: 'code'|'symbol'|'symbol-narrow'|string|boolean, digitsInfo?: string,
    locale?: string): string|null;

  override transform(value: number | string | null | undefined, currencyCode?: string, display?: "code" | "symbol" | "symbol-narrow" | string | boolean, digitsInfo?: string, locale?: string): string | null {
    return super.transform(value ? +value / 10**getNumberOfCurrencyDigits(currencyCode ?? '') : value, currencyCode, display, digitsInfo, locale);
  }

}
