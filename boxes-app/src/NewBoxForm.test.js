import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('it renders without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});
