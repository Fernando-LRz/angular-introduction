import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseCounterBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseCounterBy(+1)">+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Learning Angular';
  public counter: number = 0;

  increaseCounterBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
