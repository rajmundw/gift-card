import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcMainSectionComponent } from './gc-main-section.component';

describe('GcMainSectionComponent', () => {
  let component: GcMainSectionComponent;
  let fixture: ComponentFixture<GcMainSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcMainSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
