import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  async ngOnInit() {
    this.tasks = await this.taskService.getTasks();
  }

  async addTask() {
    if (!this.newTask.trim()) return;
    const task = await this.taskService.addTask(this.newTask);
    this.tasks.push(task);
    this.newTask = '';
  }

  async toggleTask(task: any) {
    task.completed = !task.completed;
    await this.taskService.toggleTask(task.id, task.completed);
  }

  async deleteTask(id: number) {
    await this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}