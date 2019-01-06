import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class ForumNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      loggedIn: false,
      /*
        Data for personalized forums
        Requires All Forums at index 0, Dropwdown item at index 1,
      */
      forumsMenu: ["All Forums", <DropdownItem key={1} divider />, "Web", "Data Science", "OS", "Python", "JavaScript"]
    }
  }

  /* Used to open/close mobile nav menu  */
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    /* Used to switch switch sign in/out links */
    let log = "Sign In";

    if(this.state.loggedIn) {
      log = "Sign Out";
    }

    return(
      <Navbar  dark expand="lg">

        <NavbarBrand href="/">
          <p>Let's Learn Tech</p>
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem>
                  Account
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {log}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Forums
              </DropdownToggle>
              <DropdownMenu>
                {this.state.forumsMenu.map((genre, index) => {
                  /* Check if divider */
                  if(index === 1) {
                    return genre;
                  }

                  return <DropdownItem key={index}>{genre}</DropdownItem>
                })}
              </DropdownMenu>
            </UncontrolledDropdown>


          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default ForumNav;
