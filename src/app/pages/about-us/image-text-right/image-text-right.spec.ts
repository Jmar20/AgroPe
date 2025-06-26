import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextRight } from './image-text-right';

describe('ImageTextRight', () => {
  let component: ImageTextRight;
  let fixture: ComponentFixture<ImageTextRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
