import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-todolist-item',
  standalone: true,
  imports: [CommonModule, ButtonModule,NgFor, InputTextModule],
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent {
  @Input() todo: any;
  @Input() todos: any;

  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<{idUpdate: number, titleUpdate: string}>();    

  deleteTask(id: number) {
    this.delete.emit(id);
  }

  updateTodo(idUpdate:number, titleUpdate : string) {
    this.update.emit({idUpdate, titleUpdate});
    this.displayInput();
    console.log(idUpdate, titleUpdate)
  }


  isEditing = false;

  displayInput(){
    this.isEditing = !this.isEditing;
  }


}

