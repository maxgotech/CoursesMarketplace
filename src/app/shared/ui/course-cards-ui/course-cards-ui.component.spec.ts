import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardsUiComponent } from './course-cards-ui.component';

describe('CourseCardsUiComponent', () => {
  let component: CourseCardsUiComponent;
  let fixture: ComponentFixture<CourseCardsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardsUiComponent]
    });
    fixture = TestBed.createComponent(CourseCardsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
