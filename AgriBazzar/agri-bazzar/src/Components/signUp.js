import React, { Component } from "react";
import GoogleLogin from './gLogin';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {saveSignUpDetails} from '../Actions/actionfile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.profile = React.createRef(props.userSignup);

        this.state={
            // 
        }
        this.handleChange = this.handleChange.bind(this);

    }

    updateProfile = (e) => {
        e.preventDefault()
        console.log("====Update Profile ==",this.state)
        this.props.dispatch(saveSignUpDetails(this.state.profile))
        alert("SignUp successfuly !")
    }
    getInitialState(){
        console.log("Get Initial state called")
        return {profile:this.props.userSignup}
    }
    handleChange(e) {
        const newChange ={
            ...this.state.profile,
            [e.target.name] : e.target.value
        }
        this.setState({ profile:newChange });
     }

    componentDidMount(){
        this.props.dispatch(saveSignUpDetails())
        console.log("========Component Did Mount==========>",this.props.userSignup)
    }
    componentDidUpdate(prevProps){
        if(this.props.userSignup != prevProps.userSignup){
            this.setState({profile: this.props.userSignup})
        }
    }

    render() {
        return (
            <Container>
                <Row > 
                    <Col md={{span:12}} style={{display:"flex", margin:"100px", boxShadow:"5px 5px 5px 5px", padding:"20px"}}>
                    <div className="item"  >
                        <img src="images/loginSideimg.png" alt="" style={{width:"600px",borderRadius:"20px 0px 0px 20px"}}/>
                    </div>
                    <div className="item" style={{marginLeft:"100px"}} >
                    <form>
                        <h3>Hello,<br/>Welcome To Agri Bazzar</h3>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.profile && this.state.profile.name} className="form-control" placeholder="Enter Name" style={{width:"350px"}}  onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.profile && this.state.profile.email}  className="form-control" placeholder="Enter email" style={{width:"350px"}}  onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="password" value={this.state.profile && this.state.profile.password} className="form-control" placeholder="Enter password" style={{width:"350px"}}  onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" style={{width:"350px"}}/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" style={{width:"350px",backgroundColor:"#51AF2B",borderBlockColor:"#51AF2B"}} onClick={this.updateProfile}>Sign Up</button>
                        {/* <p className="forgot-password text-right" style={{width:"350px"}}>
                            Forgot <a href="#">password?</a>
                        </p> */}
                        <p style={{textAlign:"center"}}>"OR"</p>
                        <GoogleLogin/>
                        Existing User? <a href="/login">Login</a>
                    </form>
                    </div>

                    </Col>
                </Row>
            </Container> 
                  
        );
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return {userSignup : state.search.userSignup}
}

export default  withRouter(connect(mapStateToProps)(SignUp));
