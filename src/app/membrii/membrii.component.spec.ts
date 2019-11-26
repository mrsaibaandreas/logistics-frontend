import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembriiComponent } from './membrii.component';

describe('MembriiComponent', () => {
  let component: MembriiComponent;
  let fixture: ComponentFixture<MembriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
