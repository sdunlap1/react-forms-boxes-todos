import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('it renders without crashing', () => {
  render(<TodoList />);
});
