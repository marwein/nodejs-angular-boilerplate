import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarweinComponent } from './marwein.component';

describe('MarweinComponent', () => {
  let component: MarweinComponent;
  let fixture: ComponentFixture<MarweinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarweinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarweinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
