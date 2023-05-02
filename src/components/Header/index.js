import React from "react";
import { NavLink } from "react-router-dom";

import {routeMain as routeMainPage} from "pages/MainPage";
import {routeMain as routeNewsListPage} from "pages/NewsListPage";
import {routeMain as routeContacts} from "pages/Contacts";

import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <NavLink to={routeMainPage()}>
        <div className="header__logo">
          Newsman
        </div>
      </NavLink>
      
      <nav className="header__nav-inner">
        <NavLink to={routeMainPage()} activeClassName={'nav-active'}>
          Main
        </NavLink>
        <NavLink to={routeNewsListPage()} activeClassName={'nav-active'}>
          News
        </NavLink>
        <NavLink to={routeContacts()} activeClassName={'nav-active'}>
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
