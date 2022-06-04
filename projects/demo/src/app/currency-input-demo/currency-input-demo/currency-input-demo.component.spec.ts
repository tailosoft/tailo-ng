import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputDemoComponent } from './currency-input-demo.component';

describe('CurrencyInputDemoComponent', () => {
  let component: CurrencyInputDemoComponent;
  let fixture: ComponentFixture<CurrencyInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyInputDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
