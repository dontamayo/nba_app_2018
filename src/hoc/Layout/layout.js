import React, { Component } from 'react';


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
