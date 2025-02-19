import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000/api/tasks';

  async getTasks() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async addTask(title: string) {
    const response = await axios.post(this.apiUrl, { title });
    return response.data;
  }

  async toggleTask(id: number, completed: boolean) {
    const response = await axios.put(`${this.apiUrl}/${id}`, { completed });
    return response.data;
  }

  async deleteTask(id: number) {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}