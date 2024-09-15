import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('it renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

test('does not add a todo if task is empty', () => {
  const addTodoMock = jest.fn(); // mock function for addTodo
  const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);

  // Click the button without entering any text
  fireEvent.click(getByText('Add Todo'));

  // Expect that addTodo was not called
  expect(addTodoMock).not.toHaveBeenCalled();
});

test('adds a todo if task is filled out', () => {
  const addTodoMock = jest.fn(); // mock function for addTodo
  const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);

  // Simulate entering a task and submitting
  const input = getByLabelText('New Todo');
  fireEvent.change(input, { target: { value: 'Test task' } });
  fireEvent.click(getByText('Add Todo'));

  // Expect that addTodo was called once
  expect(addTodoMock).toHaveBeenCalledTimes(1);

  // Expect the passed value to be the task entered
  expect(addTodoMock).toHaveBeenCalledWith({
    id: expect.any(String),
    task: 'Test task'
  });
});
