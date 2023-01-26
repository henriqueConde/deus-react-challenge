import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import MetaInfo from './MetaInfo';

describe('<MetaInfo />', () => {
  it('should render the heading', () => {
    render(
      <MetaInfo>
        <p>Meta Text</p>
      </MetaInfo>
    );

    expect(screen.getByText(/Meta Text/i)).toBeInTheDocument();
  });
});
