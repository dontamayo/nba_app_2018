import React, { Component } from 'react';
import './layout.css';

import Header from '../../components/Header/header';


class Layout extends Component {
  state = {

  }
  render (){
    return(
      <div>
        <Header/>
        {this.props.children}
        FOOTER
      </div>
    )
  }
}

export default Layout;
