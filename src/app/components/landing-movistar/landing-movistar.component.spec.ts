import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMovistarComponent } from './landing-movistar.component';

describe('LandingMovistarComponent', () => {
  let component: LandingMovistarComponent;
  let fixture: ComponentFixture<LandingMovistarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMovistarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMovistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
