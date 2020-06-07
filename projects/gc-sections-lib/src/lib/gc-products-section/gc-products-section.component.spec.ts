import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcProductsSectionComponent } from './gc-products-section.component';

describe('GcProductsSectionComponent', () => {
  let component: GcProductsSectionComponent;
  let fixture: ComponentFixture<GcProductsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcProductsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
