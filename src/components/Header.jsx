import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="border mt-4 p-3">
          <h1 className="text-dark text-center mt-4">React-Plate</h1>
          <p className="text-center">
            A small boilerplate to get you reacting to react.
          </p>
          <i className=" col-12 text-center fab fa-react fa-9x" />
        </div>
      </Fragment>
    );
  }
}

export default Header;
