import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCorpComponent } from './financial-corp.component';

describe('FinancialCorpComponent', () => {
  let component: FinancialCorpComponent;
  let fixture: ComponentFixture<FinancialCorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialCorpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
