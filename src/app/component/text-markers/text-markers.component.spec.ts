import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMakersComponent } from './text-markers.component';

describe('TextMakersComponent', () => {
  let component: TextMakersComponent;
  let fixture: ComponentFixture<TextMakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
