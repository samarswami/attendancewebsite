import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbradminComponent } from './addbradmin.component';

describe('AddbradminComponent', () => {
  let component: AddbradminComponent;
  let fixture: ComponentFixture<AddbradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
