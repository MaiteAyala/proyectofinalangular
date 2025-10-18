import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHComponent } from './banner-h.component';

describe('BannerHComponent', () => {
  let component: BannerHComponent;
  let fixture: ComponentFixture<BannerHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
