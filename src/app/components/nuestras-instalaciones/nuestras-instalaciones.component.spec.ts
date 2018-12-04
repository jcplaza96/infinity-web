import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasInstalacionesComponent } from './nuestras-instalaciones.component';

describe('NuestrasInstalacionesComponent', () => {
  let component: NuestrasInstalacionesComponent;
  let fixture: ComponentFixture<NuestrasInstalacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrasInstalacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrasInstalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
