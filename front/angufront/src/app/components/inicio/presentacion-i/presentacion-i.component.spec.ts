import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionIComponent } from './presentacion-i.component';

describe('PresentacionIComponent', () => {
  let component: PresentacionIComponent;
  let fixture: ComponentFixture<PresentacionIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
