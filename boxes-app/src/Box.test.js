import { render } from '@testing-library/react';
import Box from './Box';

test('it renders without crashing', () => {
  render(<Box width={100} height={100} backgroundColor="blue" />);
});
