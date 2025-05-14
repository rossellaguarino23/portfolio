import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicLinkButtonComponent } from './magic-link-button.component';

describe('MagicLinkButtonComponent', () => {
  let component: MagicLinkButtonComponent;
  let fixture: ComponentFixture<MagicLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicLinkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
