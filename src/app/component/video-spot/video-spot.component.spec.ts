import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSpotComponent } from './video-spot.component';

describe('VideoSpotComponent', () => {
  let component: VideoSpotComponent;
  let fixture: ComponentFixture<VideoSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
