import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Etapa2Component } from './etapa2.component';

describe('Etapa2Component', () => {
  let component: Etapa2Component;
  let fixture: ComponentFixture<Etapa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etapa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etapa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});