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




class Crops extends Component{
    constructor(){
        super();
        this.state ={
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
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Rice production in India</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mature_Rice_%28India%29_by_Augustus_Binu.jpg/300px-Mature_Rice_%28India%29_by_Augustus_Binu.jpg" alt="" />
                    </Col>
                    <Col md={{span:8}} style={{textAlign:"justify"}}>
                    <ReadMoreReact text="Rice production in India is an important part of the national economy.[1]
                            Major cropping areas in India. Rice shaded in light jade green indicates 
                            the most important and extensive growing areas in the east of the country
                            Dry productive Paddy Fields in South India Mature Rice, Thrissur, Kerala, India.
                            India is one of the world's largest producers of rice, including white rice and 
                            brown rice, grown mostly in the eastern and southern parts of the country.[1] 
                            The Production increased from 53.6 million tons in FY 1980 to 74.6 million tons 
                            in year 1990, a 39 percent increase over the decade. By year 1992, rice production
                            had reached 181.9 kg per person, second in the world only to China with its 182 kg.[1]
                            Since 1950 the increase has been more than 350 percent. Most of this increase was the
                            result of an increase in yields; the number of hectares did not increase during this period.
                            Yields increased from 1,336 kilograms per hectare in FY 1980 to 1,751 kilograms per hectare 
                            in FY 1990. The per-hectare yield increased more than 262 percent between 1950 and 1992.
                            Paddy Field
                            The country's rice production had declined to 89.13 million tonnes in 2009-10 crop year 
                            (July–June) from record 99.18 million tonnes in the previous year due to severe drought 
                            that affected almost half of the country. India could achieve a record rice production 
                            of 100 million tonnes in 2010-11 crop year on the back of better monsoon this year. 
                            The India's rice production reached to a record high of 104.32 million tonnes in 2011-2012 
                            crop year (July–June)."
                        min={250}
                        ideal={300}
                        max={2500}
                        readMoreText=" << read more >>"/>
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Wheat production in India</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://previews.123rf.com/images/ssyzxf/ssyzxf1605/ssyzxf160500008/56443832-growing-wheat.jpg" alt="" style={{width:"300px",height:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} style={{textAlign:"justify"}}>
                    <ReadMoreReact text="Wheat is grown on more land area than any other food crop (220.4 million hectares, 2014).[5] 
                            World trade in wheat is greater than for all other crops combined.[6] In 2017, world production 
                            of wheat was 772 million tonnes, with a forecast of 2019 production at 766 million tonnes,[7] 
                            making it the second most-produced cereal after maize.[7][8] Since 1960, world production of 
                            wheat and other grain crops has tripled and is expected to grow further through the middle of
                            the 21st century.[9] Global demand for wheat is increasing due to the unique viscoelastic and 
                            adhesive properties of gluten proteins, which facilitate the production of processed foods, 
                            whose consumption is increasing as a result of the worldwide industrialization process and the
                            westernization of the diet.[10][11]Wheat is an important source of carbohydrates.[10] Globally,
                            it is the leading source of vegetable protein in human food, having a protein content of about 
                            13%, which is relatively high compared to other major cereals[12] but relatively low in protein
                            quality for supplying essential amino acids.[13][14] When eaten as the whole grain, wheat is a
                            source of multiple nutrients and dietary fiber.[10]
                            Wheat Field:-
                            Crop development
                            Wheat normally needs between 110 and 130 days between sowing and harvest, depending upon climate, 
                            seed type, and soil conditions (winter wheat lies dormant during a winter freeze). Optimal crop 
                            management requires that the farmer have a detailed understanding of each stage of development 
                            in the growing plants. In particular, spring fertilizers, herbicides, fungicides, and growth 
                            regulators are typically applied only at specific stages of plant development. For example, 
                            it is currently recommended that the second application of nitrogen is best done when the ear 
                            (not visible at this stage) is about 1 cm in size (Z31 on Zadoks scale). Knowledge of stages 
                            is also important to identify periods of higher risk from the climate. For example, pollen 
                            formation from the mother cell, and the stages between anthesis and maturity, are susceptible 
                            to high temperatures, and this adverse effect is made worse by water stress.[139] Farmers also
                            benefit from knowing when the 'flag leaf' (last leaf) appears, as this leaf represents about 75%
                            of photosynthesis reactions during the grain filling period, and so should be preserved from disease 
                            or insect attacks to ensure a good yield."
                        min={250}
                        ideal={300}
                        max={2500}
                        readMoreText=" << read more >>"/>
                        </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Gram production in India</h2>
                <Row style={{display:"flex",flexWrap:"nowrap"}}> 
                    <Col md={{span:4}}>
                        <img src="https://kj1bcdn.b-cdn.net/media/38419/chickpea.png" alt="" style={{width:"300px",height:"300px"}}/>
                    </Col>
                    <Col md={{span:8}} >
                        <ReadMoreReact text="Pulse prices continue to reel under pressure since last year.
                                Take chana, for instance, whose prices are ruling below government minimum support prices.
                                Domestic and export demand for pulses stays softer than expected. Considering the arrival 
                                of new crops in mandies, we expect the prices to see more pressure in March, which will test 
                                the crucial support of Rs 3,940 in coming days.
                                Chana, a major rabi pulse crop of India sown during October-November, is harvested in February
                                and March. Its major producers are Rajasthan, Madhya Pradesh, Maharashtra, Karnataka, Uttar 
                                Pradesh and Andhra Pradesh."
                            min={250}
                            ideal={300}
                            max={2500}
                            readMoreText=" << read more >>"/>
                    </Col>
                </Row>
                <h2 style={{marginTop:"50px",textAlign:"center",fontFamily:"sans-serif",fontSize:"42pt",color:"#BCF456"}}>Market Price Details</h2>

                <Row>
                    <Col md={{span:10,offset:2}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Products Name</th>
                            <th>Price</th>
                            <th>State</th>
                            <th>District</th>
                            <th>Date From</th>
                            <th>Date To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
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

export default  withRouter(connect(mapStateToProps)(Crops));
