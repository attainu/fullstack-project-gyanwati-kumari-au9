import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Pagination from './pagination';
import {paginate} from '../Actions/actionfile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';



class KnowledgeCenter extends Component{
    constructor(){
        super();
        this.state ={
            expanded:false,
            pageCount: 5,
            perPage: 2,
            currentPage: 0,
        }

    }
    // expandedText() {
    //     this.setState({
    //         expanded: true
    //     });       
    // }

    paginationClick(pageNum){
        this.props.dispatch(paginate(pageNum))
 
    }
    render(){
        return(
            <Container fluid>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>India: Rich Agriculture: Poor Farmers </h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51ZmdJmtYPL._SX324_BO1,204,203,200_.jpg" alt=""/>
                    </Col>
                    <Col md={{span:8}}>
                        <p>
                        Green Revolution strategy developed India???????????????s agriculture sector phenomenally 
                        from 1970 to 1990 and made India self sufficient in food grains and other agricultural 
                        commodities. The limitation of small size of the farms was made good by a package of 
                        inputs and small farmers of India competed well with developed countries. However, 
                        since 1990s and during the last five years farmers are facing the problem of decreasing 
                        income and many farmers have committed suicide during the last
                            </p>
                            <button onClick={this.expandedText} style={{backgroundColor:"white",border:"0", color:"#51AF2B"}}> >>Read More</button>
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"32pt",color:"#BCF456"}}>Agricultural Economy of India: Current Status and Issues:</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41BaywoS+FL._SY344_BO1,204,203,200_.jpg" alt="" />
                    </Col>
                    <Col md={{span:8}} >
                        <p >Agriculture occupies a key position in the Indian economy. Though Agriculture has shrunk as a Proportion 
                            of the gross domestic product (GDP) to around 13 percent, it is a vital sector and provider of livelihood 
                            for two-thirds of India's working population. Agriculture being a state subject, The bulk of public 
                            investment in Agriculture takes place at the level of states, with the central Government supporting 
                            the states as a catalyst. The agricultural policy followed since Independence in 1947 can be broadly 
                            classified into three phases. Phase one, immediately after independence, witnessed several 
                            institutional changes through land reforms and initiation of major irrigation projects. 
                            The second Phase, starting in the mid-1960s, was aimed at increasing agricultural productivity to 
                            attain self-sufficiency in food-grains through technological revolution and government support for credit,
                            marketing, and extension services. This was followed by the current Phase, started in the late 1980s, 
                            aimed at making Agriculture more market-oriented. Unfortunately, in recent years The Indian economy has 
                            witnessed a loss of dynamism in the Agriculture and allied sectors. The Agriculture sector, as a whole, 
                            has showed poor performance. Signs of agrarian distress are visible in parts of the country, with spate 
                            of suicides by farmers in some areas being the most disturbing manifestation of this distress. 
                            Marginal and small farmers have borne the brunt of the adverse circumstances in Agriculture. Concerned 
                            by the slow growth in the Agriculture and allied sectors, the Indian government has launched a series of
                            programs to rejuvenate Agriculture and improve farm income. The present work explains and examines the 
                            key reform measures undertaken for the modernization of Indian Agriculture. Challenges facing this vital 
                            sector of the economy are also discussed. [Subject: Agriculture, India studies, economics, development 
                            studies, sustainable development, economic development].
                            </p>
                            <button onClick={this.expandedText} style={{backgroundColor:"white",border:"0", color:"#51AF2B"}}> >>Read More</button>
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Concise Agriculture for all Agricultural Competitive Exams</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/514OZdaGpLL._SX400_BO1,204,203,200_.jpg" alt="" style={{height:"300px",width:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} >
                        <p >Concise Agriculture for all Agricultural Competitive Exams (Includes Previous Years Papers 
                            of PSCS and SAUS) By C.R. Kantwa
                            </p>
                            <button onClick={this.expandedText} style={{backgroundColor:"white",border:"0", color:"#51AF2B"}}> >>Read More</button>
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Agricultural Books Details</h2>

                <Row>
                    <Col md={{span:10,offset:2}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Books Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>India: Rich Agriculture: Poor Farmers </td>
                                <td> R.L. Pitale </td>
                                <td>604/-</td>
                                <td>https://www.amazon.in/India-Rich-Agriculture-Poor-Farmers/dp/8170354579</td>
                            </tr>
                            <tr>
                                <td>Agricultural Economy of India: Current Status and Issues:</td>
                                <td>Malvika Singh</td>
                                <td>580/-</td>
                                <td>https://www.amazon.in/Agricultural-Economy-India-Current-Status/dp/8177084429/ref=pd_sbs_3?pd_rd_w=VkT8e&pf_rd_p=99c630ba-ffa4-4940-9542-3945145447d6&pf_rd_r=HP6PBVKX9N8CXD1AA3G5&pd_rd_r=9323b5a9-4d08-4556-ac58-27975a6affe8&pd_rd_wg=pcFij&pd_rd_i=8177084429&psc=1</td>
                            </tr>
                        
                        </tbody>
                    </Table>
                    </Col>
                </Row>
                <Pagination currentPage={this.props.currPage} perPage={this.props.perPage} pageCount={this.props.pageCount} paginationClick={(a,b) => this.paginationClick(a,b)} />
            </Container>

        )
    }
}
function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return { currPage: state.pagination.currPage, perPage: state.pagination.perPage, pageCount: state.pagination.pageCount}
}

export default  withRouter(connect(mapStateToProps)(KnowledgeCenter));
