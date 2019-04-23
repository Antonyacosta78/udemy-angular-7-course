import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingExerciseComponent } from './databinding-exercise.component';

describe('DatabindingExerciseComponent', () => {
  let component: DatabindingExerciseComponent;
  let fixture: ComponentFixture<DatabindingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
