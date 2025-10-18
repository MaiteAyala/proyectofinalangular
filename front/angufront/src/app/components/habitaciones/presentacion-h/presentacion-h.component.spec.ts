import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionHComponent } from './presentacion-h.component';

describe('PresentacionHComponent', () => {
  let component: PresentacionHComponent;
  let fixture: ComponentFixture<PresentacionHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
