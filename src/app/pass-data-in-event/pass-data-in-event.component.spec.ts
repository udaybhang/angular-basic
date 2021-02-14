import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataInEventComponent } from './pass-data-in-event.component';

describe('PassDataInEventComponent', () => {
  let component: PassDataInEventComponent;
  let fixture: ComponentFixture<PassDataInEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDataInEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassDataInEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
