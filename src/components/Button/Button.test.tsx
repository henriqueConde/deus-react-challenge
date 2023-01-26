import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Button from './Button';

describe('<Button />', () => {
  it('should render the small size', () => {
    render(<Button size="small">Save</Button>);
    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Save</Button>);

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Save</Button>);

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      width: '100%',
    });
  });
});
