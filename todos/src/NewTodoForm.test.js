import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('it renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});
