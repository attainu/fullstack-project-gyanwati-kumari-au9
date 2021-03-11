import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {SearchQuery} from '../Actions/actionfile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Cards from '../Components/CardsHome';
import Products from '../Components/offerProd';
import Framers from '../Components/ourFarmers';




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
                <Cards/>
                <Products/>
                <Framers/>

               
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return {search: state.search.search,}
}


export default  withRouter(connect(mapStateToProps)(Home));
