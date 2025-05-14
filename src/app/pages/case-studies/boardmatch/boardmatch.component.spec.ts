import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmatchComponent } from './boardmatch.component';

describe('BoardmatchComponent', () => {
  let component: BoardmatchComponent;
  let fixture: ComponentFixture<BoardmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardmatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
