import { OnCreateTodoSubscription } from './../../API.service';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todos$ = this.api.OnCreateTodoListener;
  all$ = this.api.ListTodos();
  extra = []
  constructor(private api: APIService) { }

  ngOnInit() {

    this.api.OnUpdateTodoListener.subscribe(d => {
      console.log('update', d)
      this.extra.push(d)
    })
    this.api.OnCreateTodoListener.subscribe(d => {
      console.log('create', d)
      this.extra.push(d['value'].data.onCreateTodo);
    })

  }

  async getAll() {
  }
  async update() {
    const res = await this.api.CreateTodo({ name: 'mytodo', description: 'tododesc' })
    console.log('create res', res)
  }
}
