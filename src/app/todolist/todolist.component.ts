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
  

}
