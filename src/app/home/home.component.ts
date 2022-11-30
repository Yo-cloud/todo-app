import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { Task } from '../TaskModel';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: string = '';
  tasklist: Task[] = [];
  id!: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data) => {
      this.tasklist = data;
      // console.log(data);
      // console.log(this.tasklist);
    });
  }

  onAddClick() {
    // alert('you entered: ' + this.task)

    var task = new Task(this.task, this.id);
    console.log(task);
    // this.tasklist.push(task);

    this.taskService.addTask(task).subscribe((data) => {
      this.tasklist = data;

      // console.log(this.tasklist);
      // console.log(data)
    });
    this.getAllTask();
    this.ngOnInit();
  }

  onDelete(id: number) {
    // this.tasklist = this.tasklist.filter((a, i) => i !== id);

    this.taskService.deleteTask(id).subscribe((data) => {
      this.tasklist = data;
    });
    this.ngOnInit();
  }

  onEditClick(id: number) {
    this.taskService.editTask(id).subscribe((data) => {
      this.tasklist = data;

      let basen = this.tasklist.find((task) => {
        return task.id == id;
      });
      console.log(basen);
    });
  }
  getAllTask() {
    this.taskService.getTask().subscribe((data) => {
      this.tasklist = data;
      console.log('hi');
    });
  }

  onDeleteAll() {
    this.taskService.deleteAllTask().subscribe((data) => {
      this.tasklist = data;
    });
  }
}
