import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from './sideNav.css';

//const FontAwesome = require('react-fontawesome');



const items = [
  {
    type: style.option,
    icon: 'home',
    text: 'Home',
    link: '/'
  },
  {
    type: style.option,
    icon: 'file-text-o',
    text: 'News',
    link: '/news'
  }
]

const showItems = () => {
  return items.map((item,i) => {
    return(
      <div key={i} className={item.type}>
        <Link to="{item.link}">
          <FontAwesome name="item.icon"/>
          {item.text}
        </Link>
      </div>

    )
  })
}

const SideNavItems = () => {
  return(
    <div>
      {showItems()}
    </div>
  )
}

export default SideNavItems;
