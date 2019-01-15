import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanCarlosComponent } from './juan-carlos.component';

describe('JuanCarlosComponent', () => {
  let component: JuanCarlosComponent;
  let fixture: ComponentFixture<JuanCarlosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuanCarlosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuanCarlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
