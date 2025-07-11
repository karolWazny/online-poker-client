import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PlayingCardWrapperComponent} from '../../playing-card-wrapper/playing-card-wrapper.component';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {AsyncPipe, NgStyle} from '@angular/common';
import {BehaviorSubject, merge, tap} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-playground',
  imports: [
    PlayingCardWrapperComponent,
    MatSlider,
    NgStyle,
    AsyncPipe,
    MatSliderThumb,
    ReactiveFormsModule
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent implements AfterViewInit {

  hueRotate = new FormControl(0);
  negative = new FormControl(0)

  style = new BehaviorSubject({
    'filter': 'invert(0)',
  })

  ngAfterViewInit(): void {
    merge(this.hueRotate.valueChanges, this.negative.valueChanges).pipe(
      tap(() => this.style.next({
        'filter': `invert(${this.negative.value}) hue-rotate(${this.hueRotate.value}deg)`
      })),
    ).subscribe()
  }

}
