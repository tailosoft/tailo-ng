import { CurrencyInputDirective } from './currency-input.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  template: `
    <input id="input1" tCurrencyInput type="number" [(ngModel)]="value1"><span id="span1">{{value1}}</span>
    <input id="input2" tCurrencyInput type="number" [(ngModel)]="value2"><span id="span2">{{value2}}</span>
    <input id="input3" tCurrencyInput type="number" [(ngModel)]="value3" [smallestUnitPerUnit]="smallestUnitPerUnit"><span id="span3">{{value3}}</span>
    <input id="input4" tCurrencyInput type="number" [(ngModel)]="value4"><span id="span4">{{value4}}</span>
    <input id="input5" tCurrencyInput type="number" [(ngModel)]="value5" [code]="code"><span id="span5">{{value5}}</span>
    <form name="reactiveForm" role="form" novalidate [formGroup]="form">
      <input id="inputR1" tCurrencyInput formControlName="value1" type="number"><span id="spanR1">{{form.get('value1').value}}</span>
      <input id="inputR2" tCurrencyInput formControlName="value2" type="number"><span id="spanR2">{{form.get('value2').value}}</span>
      <input id="inputR3" tCurrencyInput formControlName="value3" type="number" [smallestUnitPerUnit]="smallestUnitPerUnit"><span id="spanR3">{{form.get('value3').value}}</span>
      <input id="inputR4" tCurrencyInput formControlName="value4" type="number"><span id="spanR4">{{form.get('value4').value}}</span>
      <input id="inputR5" tCurrencyInput formControlName="value5" type="number" [code]="code"><span id="spanR5">{{form.get('value5').value}}</span>
    </form>
  `
})
class TestCurrencyInputComponent {

  smallestUnitPerUnit = 10;
  code = 'CHF';

  value1?: number;
  value2 = 12399;
  value3: any = '129';
  value4 = 'string';
  value5 = 12300;

  form = this.fb.group({
    value1: [] as number[],
    value2: [12399],
    value3: ['129' as any],
    value4: ['string'],
    value5: [12300]
  });

  constructor(private fb: FormBuilder) {}
}

describe('CurrencyInputDirective', () => {
  let fixture: ComponentFixture<TestCurrencyInputComponent>;
  let input1El: DebugElement;
  let span1El: DebugElement;
  let input2El: DebugElement;
  let span2El: DebugElement;
  let input3El: DebugElement;
  let span3El: DebugElement;
  let input4El: DebugElement;
  let span4El: DebugElement;
  let input5El: DebugElement;
  let span5El: DebugElement;
  let inputR1El: DebugElement;
  let spanR1El: DebugElement;
  let inputR2El: DebugElement;
  let spanR2El: DebugElement;
  let inputR3El: DebugElement;
  let spanR3El: DebugElement;
  let inputR4El: DebugElement;
  let spanR4El: DebugElement;
  let inputR5El: DebugElement;
  let spanR5El: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CurrencyInputDirective
      ],
      declarations: [
        TestCurrencyInputComponent
      ],
      providers: [
        FormBuilder
      ]
    });

    fixture = TestBed.createComponent(TestCurrencyInputComponent);
    input1El = fixture.debugElement.query(By.css('#input1'));
    span1El = fixture.debugElement.query(By.css('#span1'));
    input2El = fixture.debugElement.query(By.css('#input2'));
    span2El = fixture.debugElement.query(By.css('#span2'));
    input3El = fixture.debugElement.query(By.css('#input3'));
    span3El = fixture.debugElement.query(By.css('#span3'));
    input4El = fixture.debugElement.query(By.css('#input4'));
    span4El = fixture.debugElement.query(By.css('#span4'));
    input5El = fixture.debugElement.query(By.css('#input5'));
    span5El = fixture.debugElement.query(By.css('#span5'));
    inputR1El = fixture.debugElement.query(By.css('#inputR1'));
    spanR1El = fixture.debugElement.query(By.css('#spanR1'));
    inputR2El = fixture.debugElement.query(By.css('#inputR2'));
    spanR2El = fixture.debugElement.query(By.css('#spanR2'));
    inputR3El = fixture.debugElement.query(By.css('#inputR3'));
    spanR3El = fixture.debugElement.query(By.css('#spanR3'));
    inputR4El = fixture.debugElement.query(By.css('#inputR4'));
    spanR4El = fixture.debugElement.query(By.css('#spanR4'));
    inputR5El = fixture.debugElement.query(By.css('#inputR5'));
    spanR5El = fixture.debugElement.query(By.css('#spanR5'));
  });

  it('should display by default', () => {
    fixture.detectChanges();
    expect(input1El.nativeElement).toBeTruthy();
    expect(span1El.nativeElement.textContent.trim()).toBe('');
    expect(inputR1El.nativeElement).toBeTruthy();
    expect(spanR1El.nativeElement.textContent.trim()).toBe('');
  });

  it('should be initialized with the correct value', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(input1El.nativeElement.value).toBe('');
    expect(span1El.nativeElement.innerHTML).toBe('');
    expect(input2El.nativeElement.value).toBe('123.99');
    expect(span2El.nativeElement.innerHTML).toBe('12399');
    expect(input3El.nativeElement.value).toBe('12.9');
    expect(span3El.nativeElement.innerHTML).toBe('129');
    expect(input4El.nativeElement.value).toBe('');
    expect(span4El.nativeElement.innerHTML).toBe('string');
    expect(inputR1El.nativeElement.value).toBe('');
    expect(spanR1El.nativeElement.innerHTML).toBe('');
    expect(inputR2El.nativeElement.value).toBe('123.99');
    expect(spanR2El.nativeElement.innerHTML).toBe('12399');
    expect(inputR3El.nativeElement.value).toBe('12.9');
    expect(spanR3El.nativeElement.innerHTML).toBe('129');
    expect(inputR4El.nativeElement.value).toBe('');
    expect(spanR4El.nativeElement.innerHTML).toBe('string');
  }));

  it('should have the correct value on input change', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    input3El.nativeElement.value = '1234.9';
    inputR3El.nativeElement.value = '1234.9';
    input3El.nativeElement.dispatchEvent(new Event('change'));
    inputR3El.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    tick();
    expect(input3El.nativeElement.value).toBe('1234.9');
    expect(span3El.nativeElement.innerHTML).toBe('12349');
    expect(inputR3El.nativeElement.value).toBe('1234.9');
    expect(spanR3El.nativeElement.innerHTML).toBe('12349');
    expect(fixture.componentInstance.value3).toBe(12349);
    expect(fixture.componentInstance.form.get('value3')!.value).toBe(12349);
  }));

  it('should have the correct value on value change', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.componentInstance.value1 = 199;
    fixture.componentInstance.form.patchValue({value1: 199});
    fixture.detectChanges();
    tick();
    expect(input1El.nativeElement.value).toBe('1.99');
    expect(span1El.nativeElement.innerHTML).toBe('199');
    expect(inputR1El.nativeElement.value).toBe('1.99');
    expect(spanR1El.nativeElement.innerHTML).toBe('199');
  }));

  it('should have the correct value on smallestUnitPerUnit change', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.componentInstance.smallestUnitPerUnit = 1000;
    fixture.detectChanges();
    tick();
    fixture.componentInstance.value3 = 123999;
    fixture.componentInstance.form.patchValue({value3: 123999});
    fixture.detectChanges();
    tick();
    expect(input3El.nativeElement.value).toBe('123.999');
    expect(span3El.nativeElement.innerHTML).toBe('123999');
    expect(inputR3El.nativeElement.value).toBe('123.999');
    expect(spanR3El.nativeElement.innerHTML).toBe('123999');
  }));

  it('should have the correct value on code change', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.componentInstance.code = 'CHF';
    fixture.detectChanges();
    expect(input5El.nativeElement.value).toBe('123');
    expect(span5El.nativeElement.innerHTML).toBe('12300');
    expect(inputR5El.nativeElement.value).toBe('123');
    expect(spanR5El.nativeElement.innerHTML).toBe('12300');
    fixture.componentInstance.code = 'XOF';
    fixture.detectChanges();
    tick();
    expect(input5El.nativeElement.value).toBe('123');
    expect(span5El.nativeElement.innerHTML).toBe('123');
    expect(inputR5El.nativeElement.value).toBe('123');
    expect(spanR5El.nativeElement.innerHTML).toBe('123');
  }));
});
