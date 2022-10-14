import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSurveyComponent } from './container-survey.component';

describe('ContainerSurveyComponent', () => {
  let component: ContainerSurveyComponent;
  let fixture: ComponentFixture<ContainerSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
