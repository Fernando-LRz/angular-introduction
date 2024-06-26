import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html' ,
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public emitCharacterIndex(id?: string): void {
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }

}
