import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistSearchBarComponent } from '../todolist-search-bar/todolist-search-bar.component';
import { TodolistItemComponent } from '../todolist-item/todolist-item.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,TodolistSearchBarComponent,TodolistItemComponent],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

}
