import React from "react";
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__big-small">
        <p className="footer__big">
          Postman
        </p>
        <p className="footer__small">
          Single Page Application
        </p>
      </div>
      {/* <p className="footer__center-txt">
        Дипломный проект
      </p> */}
      <div className="footer__big-small">
      <p className="footer__small footer__small_right">
          Made by
        </p>
        <p className="footer__big">
          Bohdan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
