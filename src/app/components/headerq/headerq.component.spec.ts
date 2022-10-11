import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderqComponent } from './headerq.component';

describe('HeaderqComponent', () => {
  let component: HeaderqComponent;
  let fixture: ComponentFixture<HeaderqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
