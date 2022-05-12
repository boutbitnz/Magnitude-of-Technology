import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaPreviewComponent } from './cta-preview.component';

describe('CtaPreviewComponent', () => {
  let component: CtaPreviewComponent;
  let fixture: ComponentFixture<CtaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
