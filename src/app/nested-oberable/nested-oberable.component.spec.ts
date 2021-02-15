import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOberableComponent } from './nested-oberable.component';

describe('NestedOberableComponent', () => {
  let component: NestedOberableComponent;
  let fixture: ComponentFixture<NestedOberableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedOberableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedOberableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
