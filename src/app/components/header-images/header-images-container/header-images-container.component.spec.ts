import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImagesContainerComponent } from './header-images-container.component';

describe('HeaderImagesContainerComponent', () => {
  let component: HeaderImagesContainerComponent;
  let fixture: ComponentFixture<HeaderImagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImagesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
