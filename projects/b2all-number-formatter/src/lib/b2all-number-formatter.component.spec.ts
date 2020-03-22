import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2allNumberFormatterComponent } from './b2all-number-formatter.component';

describe('B2allNumberFormatterComponent', () => {
  let component: B2allNumberFormatterComponent;
  let fixture: ComponentFixture<B2allNumberFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2allNumberFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2allNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
