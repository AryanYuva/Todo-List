import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  [x: string]: any;
  title:string;
  desc: string;

  constructor() {
  }
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

  onSubmit() {
   const todo = {
    sno: 8,
    title: this.title,
    desc: this.title,
    active: true
  }
  this.todoAdd.emit(todo);
}

ngOnInit(): void {

}

}