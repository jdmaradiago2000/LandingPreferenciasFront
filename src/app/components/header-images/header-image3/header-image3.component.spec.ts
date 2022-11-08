import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImage3Component } from './header-image3.component';

describe('HeaderImage3Component', () => {
  let component: HeaderImage3Component;
  let fixture: ComponentFixture<HeaderImage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
