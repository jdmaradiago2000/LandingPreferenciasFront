import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa1Component } from './etapa1.component';

describe('Etapa1Component', () => {
  let component: Etapa1Component;
  let fixture: ComponentFixture<Etapa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etapa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etapa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
