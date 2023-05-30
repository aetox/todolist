import { Component, Injectable } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TodolistSearchBarComponent } from '../todolist-search-bar/todolist-search-bar.component';
import { TodolistItemComponent } from '../todolist-item/todolist-item.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,TodolistSearchBarComponent,TodolistItemComponent,NgFor],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  private taskIdCounter = 0; // Add this line
  public todos : any[] = []; 
  

  updateTodos(todos: any[]) {
    this.todos = todos;
  }

  updateTodo(id: number, titleUpdate :string){
    let todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.name = titleUpdate;
      console.log(todo.name)
    } else {
      console.error('Todo not found');
    }
  }

  addTodo(title:string){
    this.todos.push({id:this.taskIdCounter++, name:title}); // Use taskIdCounter instead of this.todos.length
    console.log(this.todos)
  }


  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(this.todos);
  }
}
