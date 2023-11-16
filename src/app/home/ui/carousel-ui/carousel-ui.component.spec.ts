import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselUiComponent } from './carousel-ui.component';

describe('CarouselUiComponent', () => {
  let component: CarouselUiComponent;
  let fixture: ComponentFixture<CarouselUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselUiComponent]
    });
    fixture = TestBed.createComponent(CarouselUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
