import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardWrapperComponent } from './playing-card-wrapper.component';

describe('PlayingCardWrapperComponent', () => {
  let component: PlayingCardWrapperComponent;
  let fixture: ComponentFixture<PlayingCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingCardWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
