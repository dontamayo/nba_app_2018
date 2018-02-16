import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import SideNav from './SideNav/sideNav';


import FontAwesome from 'react-fontawesome';

const Header = (props) => {

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars"
        //onClick={props.onOpenNav} == i change here
        onClick={props.onOpenNav}
        style={{
          backgroundColor:'green',
          padding: '10px',
          cursor: 'pointer',
        }}
        />
    </div>
  )

  const logo = () => (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png"/>
      </Link>
      )

  return(
    <header className={style.header}>
        <SideNav {...props}/>
        <div className={style.header.Opt}>
          {navBars()}
          {logo()}
        </div>
    </header>
  )
}

export default Header;
