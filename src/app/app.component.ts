import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './service/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  listUsers$:any;
  title = 'todo-app';
  posts:any;
  taskService: any;
  constructor(private http: HttpClient , taskService: TaskService) { 
    this.taskService = taskService;
    id :Intl;
    work:String;
  }
  
  
  ngOnInit() {
    
  
  }
}
