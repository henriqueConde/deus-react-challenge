import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Anchor from './Anchor';

describe('<Anchor />', () => {
  it('should render text and href attribute', () => {
    render(<Anchor path="/">Link</Anchor>);

    const anchorEl = screen.getByText('Link');

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute('href', '/');
  });
});
