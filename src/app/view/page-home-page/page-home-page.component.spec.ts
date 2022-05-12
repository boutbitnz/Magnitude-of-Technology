import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomePageComponent } from './page-home-page.component';

describe('PageHomePageComponent', () => {
  let component: PageHomePageComponent;
  let fixture: ComponentFixture<PageHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
