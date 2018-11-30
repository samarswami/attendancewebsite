import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstComponent } from './add-inst.component';

describe('AddInstComponent', () => {
  let component: AddInstComponent;
  let fixture: ComponentFixture<AddInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
