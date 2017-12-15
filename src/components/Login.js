 import React, { Component } from 'react';
 import { Row, Col } from 'reactstrap';
 import { Link } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { BrowserRouter } from 'react-router-dom'
 import Create from './Create';

 class Login extends Component{

   state={
     email: '',
     password: ''
   }

   handleSubmit = (e)=>{
     e.preventDefault();
     let email = this.props.users && this.props.users.find(user => user.email == this.state.email)
     console.log('.find method returned: ', email);
       if(email && email.password === this.state.password){
         this.props.handleLogin(email && email.id);
         this.props.history.push('/musicians')
       }else{
         return(
           <p className="text-danger">incorrect login</p>
         )
       }
     }

   render(){
     return(
       <div className='top-marg-lg '>
        <Row >
          <Col sm={{size: 4, offset: 4}} className='top-marg-lg sidebar'>
            <h3 className='top-marg-sm text-success'>Login</h3>
            <Row className='top-marg-lg'>
              <Col>
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <Row>
                      <Col sm={{size: 10, offset: 1}} className='top-marg-sm '>
                        <input
                          type="email"
                          className="form-control-plaintext w100 border-secondary"
                          placeholder='email'
                          onChange={(e)=>this.setState({email: e.target.value})}
                          value={this.state.email}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={{size: 10, offset: 1}} className='top-marg-sm'>
                        <input
                          type="password"
                          className="form-control-plaintext w100 border-secondary"
                          placeholder='password'
                          onChange={(e)=>this.setState({password: e.target.value})}
                          value={this.state.password}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={{size: 10, offset: 1}}>
                         <button type="submit" className="btn btn-success btn-block top-marg-sm">Submit</button>
                      </Col>
                    </Row>
                  </fieldset>
                </form>
                <Row>
                  <Col sm={12} className="top-marg-sm bottom-marg-sm">
                    <Link to={'/create-account'} className="center-text ">Creat Account</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
       </div>
     )
   }
 }

 const mapStateToProps = state =>{
   return{
     users: state.users
   }
 }

 export default connect(mapStateToProps, null)(Login);
