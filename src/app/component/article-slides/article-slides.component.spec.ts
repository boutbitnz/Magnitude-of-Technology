import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSlidesComponent } from './article-slides.component';

describe('ArticleSlidesComponent', () => {
  let component: ArticleSlidesComponent;
  let fixture: ComponentFixture<ArticleSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
