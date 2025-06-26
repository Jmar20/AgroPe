import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextLeft } from './image-text-left';

describe('ImageTextLeft', () => {
  let component: ImageTextLeft;
  let fixture: ComponentFixture<ImageTextLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextLeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
