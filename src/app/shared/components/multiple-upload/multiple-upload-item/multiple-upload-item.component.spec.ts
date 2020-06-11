import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleUploadItemComponent } from './multiple-upload-item.component';

describe('MultipleUploadItemComponent', () => {
  let component: MultipleUploadItemComponent;
  let fixture: ComponentFixture<MultipleUploadItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleUploadItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
