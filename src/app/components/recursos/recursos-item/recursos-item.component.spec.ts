import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosItemComponent } from './recursos-item.component';

describe('RecursosItemComponent', () => {
  let component: RecursosItemComponent;
  let fixture: ComponentFixture<RecursosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
