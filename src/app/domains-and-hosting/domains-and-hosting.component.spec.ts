import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsAndHostingComponent } from './domains-and-hosting.component';

describe('DomainsAndHostingComponent', () => {
  let component: DomainsAndHostingComponent;
  let fixture: ComponentFixture<DomainsAndHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainsAndHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsAndHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
