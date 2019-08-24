import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteparentComponent } from './quoteparent.component';

describe('QuoteparentComponent', () => {
  let component: QuoteparentComponent;
  let fixture: ComponentFixture<QuoteparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
