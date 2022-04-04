import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];
  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deletaAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
