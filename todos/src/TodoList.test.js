import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('it renders without crashing', () => {
  render(<TodoList />);
});

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => store[key] = value.toString(),
    clear: () => store = {}
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

test('loads todos from localStorage', () => {
  // Arrange: mock localStorage with existing todos
  window.localStorage.setItem('todos', JSON.stringify([{ id: '1', task: 'Test todo' }]));

  // Act: render TodoList
  const { getByText } = render(<TodoList />);

  // Assert: check if the mocked todo is rendered
  expect(getByText('Test todo')).toBeInTheDocument();
});

test('saves new todo to localStorage', () => {
  // Arrange: render TodoList
  window.localStorage.setItem('todos', JSON.stringify([{ id: '1', task: 'Test todo' }]));
  const { getByLabelText, getByText } = render(<TodoList />);

  // Act: simulate adding a new todo
  const input = getByLabelText('New Todo');
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(getByText('Add Todo'));

  // Assert: check if both todos (existing and new) are saved in localStorage
  const todosInStorage = JSON.parse(window.localStorage.getItem('todos'));
  expect(todosInStorage).toEqual([
    { id: '1', task: 'Test todo' }, // existing todo
    { id: expect.any(String), task: 'New task' } // new todo
  ]);
});