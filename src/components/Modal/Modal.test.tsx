import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@utils/customTestSetup';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

const mockProps = {
  title: 'This is the title',
  children: '<button type="button">The child</button>',
  close: vi.fn(),
  show: true,
};

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(<Modal {...mockProps} />);

    const modal = screen.getByTestId('modal-wrapper');
    const title = screen.getByRole('heading', { name: /This is the title/i });
    const btnChild = screen.getByText(/The child/i);
    const closeIcon = screen.getByTestId('close-modal-icon');

    expect(title).toBeInTheDocument();
    expect(btnChild).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });

  it('should close callback when clicking close icon', async () => {
    render(<Modal {...mockProps} />);

    const closeIcon = screen.getByTestId('close-modal-icon');

    userEvent.click(closeIcon);

    await waitFor(() => {
      expect(mockProps.close).toHaveBeenCalled();
    });
  });

  it('should not render when show is false', async () => {
    render(<Modal {...mockProps} show={false} />);

    const modal = screen.queryByTestId('modal-wrapper');

    expect(modal).not.toBeInTheDocument();
  });
});
