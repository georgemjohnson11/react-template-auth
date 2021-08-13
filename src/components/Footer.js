import React from 'react';
import Title from './Title'

function Footer(/*props*/) {
  return (
    <footer>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a href="{% url 'posts-view' %}">Blog</a>
          </li>
          <li class="nav-item active"><a href="https://mailchi.mp/0aec99988c6b/gmjnow-finance">Subscribe</a></li>
          <li class="nav-item active"><a href="{% url 'termsconditions' %}">Terms and Conditions</a></li>
          <li class="nav-item active"><a href="{% url 'contact' %}">Contact Us</a></li>
          <li class="nav-item active"><a href="{% url 'privacypolicy' %}">Privacy Policy</a></li>
          <li class="nav-item active"><a href="{% url 'about' %}">About</a></li>
      </ul>
      </nav>
      <div className="text-center small copyright">
         GEOJOHN LLC © 2021
      </div>
      <br />
      <div className="small copyright">DISCLAIMER: NO INVESTMENT ADVICE. Futures, stocks and options trading involves substantial risk
      of loss. An individual should never invest in the securities of any of the companies' mentioned based
      solely on information contained on our website. These are observations. Individuals should assume that all information provided
      regarding companies is not trustworthy unless verified by their own independent research. GMJNOW LLC and its
      affiliates are not responsible for any decisions made based on information presented on this website.</div>
    </footer>
  );
}

export default Footer;
