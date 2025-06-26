import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDescription } from './cards-description';

describe('CardsDescription', () => {
  let component: CardsDescription;
  let fixture: ComponentFixture<CardsDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
