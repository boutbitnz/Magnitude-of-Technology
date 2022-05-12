import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaRevealComponent } from './cta-reveal.component';

describe('CtaRevealComponent', () => {
  let component: CtaRevealComponent;
  let fixture: ComponentFixture<CtaRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaRevealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
