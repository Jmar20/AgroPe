import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInfo } from './cards-info';

describe('CardsInfo', () => {
  let component: CardsInfo;
  let fixture: ComponentFixture<CardsInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
