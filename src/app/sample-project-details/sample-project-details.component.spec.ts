import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProjectDetailsComponent } from './sample-project-details.component';

describe('SampleProjectDetailsComponent', () => {
  let component: SampleProjectDetailsComponent;
  let fixture: ComponentFixture<SampleProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
