import React, { Component } from "react";
import GoogleLogin from './gLogin';

export default class Login extends Component {
    render() {
        return (
                <div className="container" style={{display:"flex", margin:"100px", boxShadow:"5px 5px 5px 5px", padding:"20px"}}>
                   <div className="item">
                       <img src="images/loginSideimg.png" alt="" style={{width:"600px",borderRadius:"20px 0px 0px 20px"}}/>
                   </div>
                   <div className="item" style={{marginLeft:"100px"}}>
                   <form>
                        <h3>Hello,<br/>Welcome Back</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" style={{width:"350px"}}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" style={{width:"350px"}}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" style={{width:"350px"}}/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" style={{width:"350px",backgroundColor:"#51AF2B",borderBlockColor:"#51AF2B"}}>Login </button>
                        <p className="forgot-password text-right" style={{width:"350px"}}>
                            Forgot <a href="#">password?</a>
                        </p>
                        <p style={{textAlign:"center"}}>"OR"</p>
                        <GoogleLogin/>
                        New User? <a href="/signup" >SignUp</a>
                    </form>
                   </div>
                </div>  
            
        );
    }
}