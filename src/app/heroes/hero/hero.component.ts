import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  get getCapitalizeName(): string {
    return this.name.toUpperCase()
  }

  public getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHeroName(): void {
    this.name = 'Spider Man';
  }

  changeHeroAge(): void {
    this.age = 25;
  }

}
