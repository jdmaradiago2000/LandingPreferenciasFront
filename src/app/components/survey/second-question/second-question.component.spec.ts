import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQuestionComponent } from './second-question.component';

describe('SecondQuestionComponent', () => {
  let component: SecondQuestionComponent;
  let fixture: ComponentFixture<SecondQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
