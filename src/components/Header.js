import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';
import Navbar from "./NavBar";

function                                                                   Header()
  {
    return (
        <div class="jumbotron text-center">
        <Fragment>
        <Title />
        <Navbar />
      </Fragment>
      </div>
    )
  }
export default Header;