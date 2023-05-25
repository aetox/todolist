import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-todolist-item',
  standalone: true,
  imports: [CommonModule, ButtonModule,NgFor],
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent {

}
