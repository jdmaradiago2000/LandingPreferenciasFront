import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImage2Component } from './header-image2.component';

describe('HeaderImage2Component', () => {
  let component: HeaderImage2Component;
  let fixture: ComponentFixture<HeaderImage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
