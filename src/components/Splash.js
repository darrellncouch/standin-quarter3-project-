import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Jumbotron, Container, Button } from 'reactstrap';

class Splash extends Component{

  handleOnClick =(e)=>{
    e.preventDefault();
    this.props.history.push('/musicians');
  }

  render(){


    return(
      <div>
        <Row>
          <Col >
          <Jumbotron fluid clssName="jumbotron">
             <Container fluid>
               <h1 className="display-3 text-white top-marg-md ">Stand In</h1>
               <h2 className="text-white"> A true music community</h2>
               <button
                  type="button"
                  className="btn top-marg-sm bottom-marg-md"
                  id="jumbotron-btn"
                  onClick={this.handleOnClick}
                >
                  Lets make some music
                </button >
             </Container>
           </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} >
            <h3 className="text-cyan">Some placeholder text</h3>
          </Col>
          <Col xs={12} sm={12} md={6} className="">
            <img src="http://www.eastmesaguitarlessons.com/wp-content/uploads/2015/08/Depositphotos_13155518_m-2015.jpg" alt="" className="img-responsive"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} className="bkgnd-cyan">
            <img src="https://images.pexels.com/photos/354304/pexels-photo-354304.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-responsive"/>
          </Col>
          <Col xs={12} sm={12} md={6} className="bkgnd-cyan">
          <h3 className="text-white">Some placeholder text</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} >
          <h3 className="text-purple">Some placeholder text</h3>
          </Col>
          <Col xs={12} sm={12} md={6} className="">
            <img src="https://cache.diomedia.com/230h/01/B2/PV/01B2-PV4M.jpg" alt="" className="img-responsive"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} className="bkgnd-purple">
            <img src="http://gmi.ge/wp-content/uploads/2015/02/N2.jpg" alt="" className="img-responsive"/>
          </Col>
          <Col xs={12} sm={12} md={6} className="bkgnd-purple">
          <h3 className="text-white">Some placeholder text</h3>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Splash);
