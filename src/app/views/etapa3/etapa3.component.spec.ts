import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa3Component } from './etapa3.component';

describe('Etapa3Component', () => {
  let component: Etapa3Component;
  let fixture: ComponentFixture<Etapa3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etapa3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etapa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
