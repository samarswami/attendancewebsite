import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstgridComponent } from './instgrid.component';

describe('InstgridComponent', () => {
  let component: InstgridComponent;
  let fixture: ComponentFixture<InstgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
