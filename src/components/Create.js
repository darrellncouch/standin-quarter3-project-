import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';


class Create extends Component{

  state={
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    vocals: false,
    lead_guitar: false,
    rhythm_guitar: false,
    accoustic_guitar: false,
    bass_guitar: false,
    drums: false,
    keys: false,
    synth: false
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createAccount(this.state);
    this.props.history.push('/login');
  }

  render(){
    return(
      <div>
        <h3 className="top-marg-lg">Create Account</h3>
      <Card className="top-marg-lg">

        <CardBody>
          <Container>
            <Form onSubmit={(e)=>this.handleSubmit(e)}>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      onChange={(e) => this.setState({ first_name: e.target.value })}
                      value={this.state.fisrt_name}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      id="lastName"
                      onChange={(e) => this.setState({ last_name: e.target.value })}
                      value={this.state.last_name}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                      value={this.state.email}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                      value={this.state.password}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h4 className="top-marg-sm">Instruments played</h4>
              <Row>

                <Col sm={1} className="top-marg-sm">
                  <div className="form-group">
                    <input
                      className=""
                      type="checkbox"

                      onChange={(e)=> this.setState({vocals: e.target.value})}
                    /><p className="marg-right-sm">Vocals</p>
                  </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({lead_guitar: e.target.value})}  /><p className="marg-right-sm">Lead Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({rhythm_guitar: e.target.value})}  /><p className="marg-right-sm">Rhythm Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox" onChange={(e)=> this.setState({accoustic_guitar: e.target.value})}  /><p className="marg-right-sm">Accoustic Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({bass_guitar: e.target.value})}  /><p className="marg-right-sm">Bass Guitar</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"   onChange={(e)=> this.setState({drums: e.target.value})}  /><p className="marg-right-sm">Drums</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({keys: e.target.value})}  /><p className="marg-right-sm">Keys</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"   onChange={(e)=> this.setState({synth: e.target.value})}  /><p className="marg-right-sm">Synth</p>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <input type="submit" className="btn btn-block btn-success" value="Create Account"/>
                </Col>
              </Row>
            </Form>
          </Container>

        </CardBody>
      </Card>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    createAccount: bindActionCreators(actionCreators.createAccount, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Create);
