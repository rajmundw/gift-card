import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcBasketSectionComponent } from './gc-basket-section.component';

describe('GcBasketSectionComponent', () => {
  let component: GcBasketSectionComponent;
  let fixture: ComponentFixture<GcBasketSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcBasketSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcBasketSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
