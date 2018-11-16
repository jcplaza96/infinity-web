import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasSliderComponent } from './ofertas-slider.component';

describe('OfertasSliderComponent', () => {
  let component: OfertasSliderComponent;
  let fixture: ComponentFixture<OfertasSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
