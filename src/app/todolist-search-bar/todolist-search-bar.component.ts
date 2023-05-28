import { Component, EventEmitter, Inject, Injectable, Input, Output } from '@angular/core';
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

  @Input () public todos : any 

  @Output() public add = new EventEmitter()


  addTodo(title:string){
    this.add.emit(title);
  }
}
