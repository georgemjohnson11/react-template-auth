import React from 'react';
import Title from './Title'

function Footer(/*props*/) {
  return (
    <footer>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </nav>
        <div className="text-center small copyright">
          © {Title} 2016
        </div>
    </footer>
  );
}

export default Footer;
