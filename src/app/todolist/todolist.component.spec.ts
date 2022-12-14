import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todolist.component';
import { AppComponent } from '../app.component';
import { TodoPresenter } from '../todo-presenter';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, AppComponent],
      providers: [TodoPresenter],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
