import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladderBossComponent } from './bladder-boss.component';

describe('BladderBossComponent', () => {
  let component: BladderBossComponent;
  let fixture: ComponentFixture<BladderBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladderBossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BladderBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
