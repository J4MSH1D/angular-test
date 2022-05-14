import { Component, OnInit } from '@angular/core';
import { Task } from '../../types/task';
import { TASKS } from '../../composables/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  hide: boolean = false;
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
