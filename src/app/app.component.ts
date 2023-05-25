import { Component, OnInit } from '@angular/core';
import { TodolistComponent } from "./todolist/todolist.component";
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <div class="content">
    <app-todolist></app-todolist>
  </div>
  `,
    styleUrls: ['./app.component.scss'],
    imports: [TodolistComponent]
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}