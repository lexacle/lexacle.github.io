import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintenanceComponent } from './website-maintenance.component';

describe('WebsiteMaintenanceComponent', () => {
  let component: WebsiteMaintenanceComponent;
  let fixture: ComponentFixture<WebsiteMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
