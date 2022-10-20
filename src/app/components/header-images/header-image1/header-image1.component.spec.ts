import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImage1Component } from './header-image1.component';

describe('HeaderImage1Component', () => {
  let component: HeaderImage1Component;
  let fixture: ComponentFixture<HeaderImage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
