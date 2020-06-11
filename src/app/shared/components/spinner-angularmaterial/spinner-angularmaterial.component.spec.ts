import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerAngularmaterialComponent } from './spinner-angularmaterial.component';

describe('SpinnerAngularmaterialComponent', () => {
  let component: SpinnerAngularmaterialComponent;
  let fixture: ComponentFixture<SpinnerAngularmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerAngularmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerAngularmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
