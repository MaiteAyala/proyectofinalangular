import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormRComponent } from './search-form-r.component';

describe('SearchFormRComponent', () => {
  let component: SearchFormRComponent;
  let fixture: ComponentFixture<SearchFormRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
