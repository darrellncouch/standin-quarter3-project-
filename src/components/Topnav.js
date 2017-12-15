import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';
import {  //reactStrap
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

class Topnav extends Component{
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    handleDelete(e){
      e.preventDefault();
      this.props.deleteAccount((this.props.thisUser && this.props.thisUser.id))
    }

    render() {

      let findUser = this.props.users && this.props.users.find(user => user.id == this.props.appState.user_id);
      console.log('findUser:', findUser);

      let loggedIn = ()=>{
        if(findUser != undefined){
          return(
            <div>
              <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" fixed='top' expand="md">
                <NavbarBrand href="/" className="text-success">Stand In</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href=""><Link to={'/musicians'} className="text-secondary">Musicians</Link></NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {findUser.first_name}
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>
                          <Link
                            to={'/edit-account'}
                          >
                            Edit Account
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          onClick={(e)=>this.handleDelete(e)}
                        >

                            Delete Account
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          )
        }else{
          return(
            <div>
              <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" fixed='top' expand="md">
                <NavbarBrand href="/" className="text-success">Stand In</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/musicians">Musicians</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        User
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>
                          <Link
                            to={'/login'}
                          >
                            Login
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          )
        }
      }

      return (
        <div>
          {loggedIn()}
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    users: state.users
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteAccount: bindActionCreators(actionCreators.deleteAccount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnav);
