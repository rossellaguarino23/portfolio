import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoltaComponent } from './avolta.component';

describe('AvoltaComponent', () => {
  let component: AvoltaComponent;
  let fixture: ComponentFixture<AvoltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvoltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
