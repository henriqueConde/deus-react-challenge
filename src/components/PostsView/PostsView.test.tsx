import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import PostsView from './PostsView';

const mockProps = {
  isGridView: false,
  handleGridView: vi.fn(),
  handleListView: vi.fn(),
};

describe('<PostsView />', () => {
  it('should render list view', () => {
    render(<PostsView {...mockProps} />);

    const listView = screen.getByTestId('list-view');
    const gridView = screen.queryByTestId('grid-view');

    expect(listView).toBeInTheDocument();
    expect(gridView).not.toBeInTheDocument();
  });

  it('should render grid view', () => {
    render(<PostsView {...mockProps} isGridView />);

    const listView = screen.queryByTestId('list-view');
    const gridView = screen.getByTestId('grid-view');

    expect(listView).not.toBeInTheDocument();
    expect(gridView).toBeInTheDocument();
  });
});
