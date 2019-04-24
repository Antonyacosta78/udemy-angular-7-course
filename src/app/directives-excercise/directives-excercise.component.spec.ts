import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExcerciseComponent } from './directives-excercise.component';

describe('DirectivesExcerciseComponent', () => {
  let component: DirectivesExcerciseComponent;
  let fixture: ComponentFixture<DirectivesExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesExcerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
