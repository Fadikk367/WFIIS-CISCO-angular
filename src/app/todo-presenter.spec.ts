import { TodoPresenter } from './todo-presenter';

describe('TodoPresenter', () => {
  let todoPresenter: TodoPresenter;

  beforeEach(() => {
    todoPresenter = new TodoPresenter();
  });

  it('should create an instance', () => {
    expect(new TodoPresenter()).toBeTruthy();
  });

  it('Should create new item', () => {
    const testTitle = 'Test title';
    const testContent = 'test content';
    const previousItemsCount = todoPresenter.Items.length;

    todoPresenter.addItem(testTitle, testContent);

    expect(todoPresenter.Items.length).toBe(previousItemsCount + 1);
    const createdItem = todoPresenter.Items[previousItemsCount];
    expect(createdItem.title).toEqual(testTitle);
    expect(createdItem.content).toEqual(testContent);
    expect(createdItem.completed).toEqual(false);
  });

  it('Should remove item', () => {
    const previousItemsCount = todoPresenter.Items.length;
    const firstItem = todoPresenter.Items[0];

    todoPresenter.removeItem(firstItem.id);

    expect(todoPresenter.Items.length).toBe(previousItemsCount - 1);
  });

  it('Should toggle completed state for an item', () => {
    const firstItem = todoPresenter.Items[0];

    todoPresenter.setCompleted(firstItem.id, true);

    expect(firstItem.completed).toBeTrue();
  });
});
