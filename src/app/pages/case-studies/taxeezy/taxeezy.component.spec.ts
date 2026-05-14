import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeezyComponent } from './taxeezy.component';

describe('TaxeezyComponent', () => {
  let component: TaxeezyComponent;
  let fixture: ComponentFixture<TaxeezyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxeezyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeezyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
