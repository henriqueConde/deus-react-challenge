import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <h2>Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
