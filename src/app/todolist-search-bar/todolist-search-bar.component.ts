import { Component, EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-todolist-search-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule,InputTextModule],
  templateUrl: './todolist-search-bar.component.html',
  styleUrls: ['./todolist-search-bar.component.scss']
})


export class TodolistSearchBarComponent {

  @Output() public todosTab = new EventEmitter()

  public todos:any[]=[];
  private taskIdCounter = 0; // Add this line

     
  addTodo(title:string){
    this.todos.push({id:this.taskIdCounter++, name:title}); // Use taskIdCounter instead of this.todos.length
    // Emit the event with the updated todos array
    this.todosTab.emit(this.todos);
  }
}
