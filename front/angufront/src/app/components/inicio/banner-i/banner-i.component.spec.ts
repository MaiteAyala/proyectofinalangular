import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIComponent } from './banner-i.component';

describe('BannerIComponent', () => {
  let component: BannerIComponent;
  let fixture: ComponentFixture<BannerIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
