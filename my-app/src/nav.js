import React from 'react';
//import logo from './logo.svg';
const menulist = ["Home", "About", "List", "Service", "More"];
const listItems = menulist.map((menulist) =>
      <li><a href="#">{menulist} </a></li>
);

class MainNav extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">React Demo</a>
    </div>
    <ul className="nav navbar-nav">
    {listItems}
    </ul>
  </div>
</nav>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (<div>
      <MainNav />
          </div>
      );
    }
    }

export default Nav;
