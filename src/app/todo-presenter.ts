import { ITodoPresenter } from './itodo-presenter';
import { TodoItem } from './todo-item';

export class TodoPresenter implements ITodoPresenter {
  Items: TodoItem[];

  constructor() {
    this.Items = [
      {
        id: 1,
        title: 'Task 1',
        content: 'Lorem ipsum',
        completed: false,
      },
      {
        id: 2,
        title: 'Task 2',
        content: 'Lorem ipsum',
        completed: true,
      },
    ];
  }

  addItem(title: string, content: string): void {
    const newItem = {
      id: Date.now(),
      title,
      content,
      completed: false,
    };

    this.Items.push(newItem);
    console.log(`New item has been added`);
  }

  removeItem(id: number): void {
    const itemIndex = this.Items.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      this.Items.splice(itemIndex, 1);
      console.log(`Item with id=${id} has been removed`);
    } else {
      console.log(`Item with id=${id} does not exist`);
    }
  }

  setCompleted(id: number, isCompleted: boolean): void {
    const itemToUpdate = this.Items.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.completed = isCompleted;
      console.log(`Item with id=${id} updated, completed= ${isCompleted}`);
    } else {
      console.log(`Item with id=${id} does not exist`);
    }
  }
}
