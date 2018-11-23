import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthguardsComponent } from './authguards.component';

describe('AuthguardsComponent', () => {
  let component: AuthguardsComponent;
  let fixture: ComponentFixture<AuthguardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthguardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthguardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
