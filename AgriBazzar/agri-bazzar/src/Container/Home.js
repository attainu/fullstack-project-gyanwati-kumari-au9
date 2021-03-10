import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {SearchQuery} from '../Actions/actionfile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';




class Home extends Component{
    constructor(){
        super()
        this.state = {
            // 
        }
        
    }
    componentDidMount(){
        console.log("Going to call loadpage action")
        
    }
    onSearch(){
        this.props.dispatch(SearchQuery(this.state.searchQuery))
    }

    
    render(){
        return(
            <div className="container-fluid" >
                <div className="row" style={{backgroundImage:"url(/images/banner.png)",height:"500px",width:"1500px",position:"absolute"}}>
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"600px",marginLeft:"350px"}} />
                    <Button variant="outline-light"  onClick={ this.onSearch.bind(this)} style={{marginLeft:"-10.5px", backgroundColor:"#51AF2B"}}>Find</Button>
                </Form>
                </div>
                <div className="row" >
                    <Card style={{ width: '16rem' ,marginTop:"300px",marginLeft:"70px"}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Live Stock</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                            50 items
                            </Card.Text>
                            <Card.Img variant="top" src="images/live.jpg" style={{borderRadius:"100%"}}/>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem' ,marginTop:"300px",marginLeft:"33px"}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Crops</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                            150 items
                            </Card.Text>
                            <Card.Img variant="top" src="images/capsicum.jpg" style={{borderRadius:"100%"}}/>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem' ,marginTop:"300px",marginLeft:"33px"}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Farm Equipments</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                            250 items
                            </Card.Text>
                            <Card.Img variant="top" src="images/equip.jpg" style={{borderRadius:"100%"}}/>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem' ,marginTop:"300px",marginLeft:"33px"}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Books</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                            300 items
                            </Card.Text>
                            <Card.Img variant="top" src="images/book.jpg" style={{borderRadius:"100%"}}/>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

               
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return {search: state.search.search,}
}


export default  withRouter(connect(mapStateToProps)(Home));
