import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FernandoComponent } from './fernando.component';

describe('FernandoComponent', () => {
  let component: FernandoComponent;
  let fixture: ComponentFixture<FernandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FernandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FernandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
