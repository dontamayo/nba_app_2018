import React, { Component } from 'react';
import './layout.css';


class Layout extends Component {
  state = {

  }
  render (){
    return(
      <div>
        HEADER
        {this.props.children}
        FOOTER
      </div>
    )
  }
}

export default Layout;
