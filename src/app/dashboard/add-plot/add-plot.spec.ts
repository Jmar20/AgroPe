import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlot } from './add-plot';

describe('AddPlot', () => {
  let component: AddPlot;
  let fixture: ComponentFixture<AddPlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
