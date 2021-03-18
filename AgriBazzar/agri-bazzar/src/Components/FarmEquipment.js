import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Pagination from './pagination';
import {paginate} from '../Actions/actionfile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ReadMoreReact from 'read-more-react';



class FarmEquip extends Component{
    constructor(){
        super();
        this.state ={
            expanded:false,
            pageCount: 5,
            perPage: 2,
            currentPage: 0,
        }

    }
  
    paginationClick(pageNum){
        this.props.dispatch(paginate(pageNum))
 
    }
    render(){
        return(
            <Container fluid>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>GreenSystem Deluxe MB Plough</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://www.deere.co.in/assets/images/region-1/products/implements/delux_mb_plough_large_e3c28bc0d087f304f3d93e23f1baff30ed40034e.png" alt="" style={{height:"300px",width:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} style={{textAlign:"justify"}}>
                    <ReadMoreReact text=" GreenSystem Deluxe MB Plough assists in land preparation. It provides precision ploughing 
                            with a uniform depth of cut . It is ideal for crops of Sugarcane, Oilseeds, Pulses, 
                            Cotton and Grains. It is most compatible with medium and hard types of soil.
                            Look Out For :-
                            Higher reliability
                            Ability to upturn the soil with crop stubbles
                            Ability of the tractor implement to break hardpan of soil with ease"
                        min={250}
                        ideal={300}
                        max={2500}
                        readMoreText=" << read more >>"/>
                    
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Paddy Special Rotary Tiller</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://www.deere.co.in/assets/images/region-1/products/implements/Paddy_Tiller_Implement_John_Deere_large_e78afff8d88c9621daf80de541182eb4d69196cb.png" alt="" style={{width:"300px",height:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} style={{textAlign:"justify"}}>
                        <ReadMoreReact text="Paddy Special Rotary Tiller is useful in land preparation. This light weight puddling special 
                            Rotary Tiller is efficient in preparing the seedbed for transplanting of paddy. This farm 
                            equipment is best suited for Paddy crops.
                            Look Out For :-
                            Better incorporation of weeds and residues
                            Adjustable skid protects from mud and wear and tear
                            Higher productivity and lower fuel consumption"
                        min={250}
                        ideal={300}
                        max={2500}
                        readMoreText=" << read more >>"/>
                   
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>GreenSystem Seed Cum Fertilizer Drill</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://www.deere.co.in/assets/images/region-1/products/implements/seed_fertilizer_drill_large_eab835ad3c902260de299f6ea0530e6ccc87aa0a.png" alt="" style={{width:"300px",height:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} style={{textAlign:"justify"}}>
                        <ReadMoreReact text="GreenSystem Seed cum Fertilizer Drill is a specially developed solution for the sowing of 
                            seeds. This versatile tractorattachment is capable of sowing different seeds and using 
                            fertilizer at the same time. It is best suited for crops such as Wheat, Corn, Oilseeds,
                            Soybean, Pulses and Millets in all types of soil."
                        min={250}
                        ideal={300}
                        max={2500}
                        readMoreText=" << read more >>"/>
                 
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Market Price Farm Equipments</h2>

                <Row>
                    <Col md={{span:10,offset:2}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Equipments Name</th>
                            <th>Price</th>
                            <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tractor</td>
                                <td>50000/-</td>
                                <td>Bihar</td>
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

export default  withRouter(connect(mapStateToProps)(FarmEquip));
