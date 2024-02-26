import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spider Man', 'Iron man', 'Thor', 'Hulk'];
  public deletedHeroe?: string;

  public removeLastHeroe(): void {
    this.deletedHeroe = this.heroNames.pop();
  }
}
