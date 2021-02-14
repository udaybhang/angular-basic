import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdminComponent } from './route-admin.component';

describe('RouteAdminComponent', () => {
  let component: RouteAdminComponent;
  let fixture: ComponentFixture<RouteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
