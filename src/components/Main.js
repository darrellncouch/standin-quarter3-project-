import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import VocalistList from './VocalistList';
import ElGtrList from './ElGtrList';
import RymGtrList from './RymGtrList';
import AccGtrList from './AccGtrList';
import BassGtrList from './BassGtrList';
import DrumList from './DrumList';
import KeysList from './KeysList';
import SynthList from './SynthList';
import Hire from './Hire';

import Sidebar from '../components/Sidebar';

class Main extends Component{



  render(){

    return(
      <Router>
        <div className="top-marg-lg bkgnd">
          <Row>
            <Col sm={2} className="border-right sidebar">
              <Sidebar/>
            </Col>
            <Col sm={10} className="scroll-y primary_content ">
              <Switch>
                <Route path="/musicians/vocals" exact component={VocalistList}/>
                <Route path="/musicians/lGuitar" exact component={ElGtrList}/>
                <Route path="/musicians/rGuitar" exact component={RymGtrList}/>
                <Route path="/musicians/aGuitar" exact component={AccGtrList}/>
                <Route path="/musicians/bGuitar" exact component={BassGtrList}/>
                <Route path="/musicians/drum" exact component={DrumList}/>
                <Route path="/musicians/keys" exact component={KeysList}/>
                <Route path="/musicians/synth" exact component={SynthList}/>
                <Route path='/musicians/hire' exact component={Hire}/>
                <Route path='/musicians/hire/:id' exact component={Hire}/>
              </Switch>
            </Col>
          </Row>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state =>{
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Main);
