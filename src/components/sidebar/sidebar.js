import React from 'react'
import './sidebaar.css'
import { Link ,useLocation} from 'react-router-dom'


const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
            <div className="rights">
                <div style={{fontSize: '19px', borderBottom: '1px solid #8bb4d8', color: 'rgb(13, 153, 172)'}}>Related Links</div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/publications') ? 'active-link' : ''}`}
        >
          <Link to="/publications">Publications</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/books') ? 'active-link' : ''}`}
        >
          <Link to="/books">Books Published</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/projects') ? 'active-link' : ''}`}
        >
          <Link to="/projects">Projects</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/events') ? 'active-link' : ''}`}
        >
          <Link to="/events">Events</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/equipment') ? 'active-link' : ''}`}
          style={{ border: 'none' }}
        >
          <Link to="/equipment">Lab Equipment</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar