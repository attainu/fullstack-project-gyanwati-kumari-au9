import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import {allCrops} from '../Actions/actionfile';



class Cards extends Component{
    constructor(){
        super();
        this.state={
            // 
        }
        this.onClickCrops = this.onClickCrops.bind(this);
        this.onClickLiveStock = this.onClickLiveStock.bind(this);
        this.onClickFarmEquip = this.onClickFarmEquip.bind(this);
        this.onClickKnldgCenter = this.onClickKnldgCenter.bind(this);


    }
    componentDidMount(){
        console.log("Going to call all crops action")
        // this.props.dispatch(allCrops())
        
    }
    onClickCrops(e){
        e.preventDefault()
        this.props.history.push("/crops")
    }
    onClickLiveStock(e){
        e.preventDefault()
        this.props.history.push("/liveStock")
    }
    onClickFarmEquip(e){
        e.preventDefault()
        this.props.history.push("/farmEquip")
    }
    onClickKnldgCenter(e){
        e.preventDefault()
        this.props.history.push("/knowledgeCenter")
    }

    render(){
    return(
        <Container>
        <Row style={{display:"flex"}}>
          <Col md={{ span:3}}>
                <Card style={{ width: '14rem',top:"-160px",left:"100px"}}>
                    <Card.Link href="#" onClick={e => this.onClickLive(e)}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Live Stock</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        50 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/live.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card.Link>
                </Card>
          </Col>
    
          <Col md={{ span: 3 }}>
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Link href="#" onClick={e => this.onClickCrops(e)}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Crops</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        150 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/capsicum.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card.Link>
                </Card>
          </Col>
          <Col md={{ span: 3}}> 
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Link href="#" onClick={e => this.onClickFarmEquip(e)}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Farm Equipments</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        250 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/equip.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card.Link>
                </Card>
          </Col>
          <Col md={{ span: 3 }}>
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Link href="#" onClick={e => this.onClickKnldgCenter(e)}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Knowledge Center</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        300 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/book.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card.Link>
                </Card>
          </Col>
        </Row>
      </Container>
    )
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    return 
}

export default  withRouter(connect(mapStateToProps)(Cards));
