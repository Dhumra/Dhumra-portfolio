import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">

            <h1 className="footer__title">Dhumravarna </h1>
        
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
        
        <div className="footer__social">

          <a href=""  className="home__social-link" target="_blank">
          <i class='bx bxl-facebook-circle bx-design'></i>
          </a>

          <a href="" className="home__social-link" target="_blank">
          <i class='bx bxl-instagram bx-design'></i>
          </a>

          <a href="" className="home__social-link" target="_blank">
          <i class='bx bxl-twitter bx-design'></i>
          </a>
          
        </div>

        <span className="footer__copy"> @dhumravarna Ambre</span>
        
        </div>
    </footer>
  )
}

export default Footer
