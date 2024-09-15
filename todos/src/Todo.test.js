import { render } from '@testing-library/react';
import Todo from './Todo';

test('it renders without crashing', () => {
  render(<Todo id="1" task="Test task" removeTodo={() => {}} />);
});
