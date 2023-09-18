import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfPaymentComponent } from './proof-of-payment.component';

describe('ProofOfPaymentComponent', () => {
  let component: ProofOfPaymentComponent;
  let fixture: ComponentFixture<ProofOfPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofOfPaymentComponent]
    });
    fixture = TestBed.createComponent(ProofOfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
