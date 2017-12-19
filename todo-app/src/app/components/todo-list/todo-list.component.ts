import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;
  url = 'http://localhost:3000/todos';
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => this.todos = res.json())
  }

}
