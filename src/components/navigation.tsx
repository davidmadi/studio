import { Link, LinkProps } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className=''>Home</Link>
        </li>
        <li>
          <Link to="/about" className=''>About</Link>
        </li>
      </ul>
    </nav>
  );
}