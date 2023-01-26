import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import React from 'react';
import PostsView from './PostsView';

const mockSetIsGridView = vi.fn();
const mockProps = {
  isGridView: false,
  setIsGridView: mockSetIsGridView,
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
