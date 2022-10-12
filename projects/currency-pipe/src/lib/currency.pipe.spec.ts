import { CurrencyPipe } from './currency.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

describe('CurrencyPipe', () => {
  registerLocaleData(localeFr);
  it('create an instance', () => {
    const pipe = new CurrencyPipe('en', 'USD');
    expect(pipe).toBeTruthy();
  });

  it('transforms correctly', () => {
    const pipe = new CurrencyPipe('en', 'USD');
    expect(pipe).toBeTruthy();
    expect(pipe.transform(123)).toEqual('$1.23');
    expect(pipe.transform(12345, 'CHF')).toEqual('CHF123.45');
    expect(pipe.transform(10, 'CLP')).toEqual('CLP10');

    const pipeCH = new CurrencyPipe('fr', 'CHF');
    // careful this is not a space character
    expect(pipeCH.transform(12345, 'CHF')).toEqual('123,45 CHF');
  });
});
