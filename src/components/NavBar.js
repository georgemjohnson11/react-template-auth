import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
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
            {isAuth === true ? (
          <Fragment>
            {' '}
            <li class="nav-item">
              <a class="nav-link" href='/dashboard'>Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href='/logout'>Logout</a>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            {' '}
            <li class="nav-item">
              <a class="nav-link" href='/login'>Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href='/signup'>Signup</a>
            </li>
          </Fragment>
        )}
          </ul>
        </nav>
  );
};

export default Navbar;