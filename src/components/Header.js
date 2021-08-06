import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

function                                                                   Header()
  {
    return (
        <div class="jumbotron text-center">
        <Title />
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
      </div>
    )
  }
export default Header;