import { Tasks } from './../../classes/tasks.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  // @Input() public name: string;
  // @Input() public complete: boolean;
  @Output() livreurbooleen = new EventEmitter<boolean>();
  @Input() public task!: Tasks;

  constructor() {
    // this.name = 'mia';
    // this.complete = true;
    // this.task = new Tasks(1,"voyae",false,"vivrre dans un eile") ;
  }

  getComplete(): string {
    // si on met false le encours  mia en cours ss'affiches'affiche si true mia terminée s'affiche
    return this.task.completed ? ' terminée' : ' en cours';
  }
  getBadgeVariant(): string {
    return this.task.completed
      ? 'd-inline float-right badge badge-success'
      : 'd-inline float-right badge badge-warning';
  }

  getItemVariant(): string {
    let str: string = 'list-group-item list-group-';
    str += this.task.completed ? 'item-success' : 'item-warning';
    return str;
  }

  send() {
    this.livreurbooleen.emit(this.task.completed);
  }
  toggleComplete(): void {
    this.task.completed = !this.task.completed;
    this.send();
  }
  getButtonText(): string {
    return this.task.completed ? ' terminée' : ' en cours';
  }
}
