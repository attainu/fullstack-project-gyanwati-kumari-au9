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
import SearchList from '../Components/SearchResults';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Home extends Component{
    constructor(){
        super()
        this.state = {
            // 
        };
        this.handleChange = this.handleChange.bind(this);
        
    }
    // componentDidMount(){
    //     console.log("Going to call loadpage action")
        
    // }
    onSearch(e){
        e.preventDefault()
        this.props.dispatch(SearchQuery(this.state.searchQuery))
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    
    render(){
        return(
            <Container fluid>
                <Row md={{ span: 12 }} style={{backgroundImage:"url(/images/banner.png)",height:"500px",width:"1500px"}}>
                    <Col md={{ span: 6 ,offset: 3}}>
                        <Form inline style={{marginTop:"200px"}} >
                            <FormControl value={this.state.searchQuery} type="text" name="searchQuery" placeholder="Search" className="mr-sm-2" style={{width:"450px"}} onChange = { (e) => this.handleChange(e)}/>
                            <Button variant="outline-light"  onClick={ this.onSearch.bind(this)} style={{marginLeft:"-10.5px", backgroundColor:"#51AF2B"}}>Find</Button>
                        </Form>
                        <SearchList searchresult={this.props.searchresult}/>

                    </Col>
                </Row>

                <Cards/>
                <Products/>
                <Framers/>

               
            </Container>
        )
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return {search: state.search.search, searchresult: state.search.searchresults}
}


export default  withRouter(connect(mapStateToProps)(Home));
