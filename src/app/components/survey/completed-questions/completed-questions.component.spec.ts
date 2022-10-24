import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedQuestionsComponent } from './completed-questions.component';

describe('CompletedQuestionsComponent', () => {
  let component: CompletedQuestionsComponent;
  let fixture: ComponentFixture<CompletedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
