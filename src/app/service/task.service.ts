import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../TaskModel';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // fetch the data from the server with the help of HTTP GET request

  private baseurl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseurl + "/tasks");

  }

  addTask(task: Task): Observable<Task[]> {

    return this.http.post<Task[]>(this.baseurl + "/task", task);

  }

  deleteTask(id:number) : Observable<Task[]>{
  return this.http.delete<Task[]>(this.baseurl + "/task" + "/" + id);
  }

  deleteAllTask() : Observable<Task[]> {
    return this.http.delete<Task[]>(this.baseurl + "/task" + "/" + "delete");
  }

editTask(id:number): Observable<Task[]>{
  return this.http.put<Task[]>(this.baseurl + "/task" + "/" + id , id);
}
}

