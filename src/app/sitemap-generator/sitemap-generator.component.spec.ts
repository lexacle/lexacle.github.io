import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapGeneratorComponent } from './sitemap-generator.component';

describe('SitemapGeneratorComponent', () => {
  let component: SitemapGeneratorComponent;
  let fixture: ComponentFixture<SitemapGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemapGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
