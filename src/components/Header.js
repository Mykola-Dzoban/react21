import { Link } from 'react-router-dom'
import "./Header.css";

export function Header() {
  return (
    <>
      <header className="App-header">
        <h1>Twitterskyi</h1>
        <div className="navigation">
          <Link to="/">Home</Link>

          <Link to="/posts">Make post</Link>
        </div>
      </header>
    </>
  );
}
