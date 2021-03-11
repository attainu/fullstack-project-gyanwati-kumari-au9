import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
 
const OurFarmers = () => {
    return(
       <div className="container"style={{textAlign:"center",marginTop:"50px"}}>
           <h3 style={{fontSize:"42pt"}}>Our Farmers</h3>
            <h6>Welcome our agriculture specialists</h6>
           <div className="row" style={{marginLeft:"130px"}}>
           <CardDeck>
                <Card>
                    <Card.Img variant="top" src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-fermers1.jpg" />
                    <Card.Body>
                    <Card.Title>Andrew Hawkins</Card.Title>
                    <small className="text-muted">Farmer</small>
                    <Card.Text>
                    Andrew is a fine winemaker who got his experience thanks to his grandfather.
                    </Card.Text>
                    </Card.Body>
                
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-fermers2.jpg" />
                    <Card.Body>
                    <Card.Title>Anthony Patel</Card.Title>
                    <small className="text-muted">Tractor driver</small>
                    <Card.Text>
                        Anthony has the amazing driving skill that is necessary for organic food transportation.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-fermers3.jpg" />
                    <Card.Body>
                    <Card.Title>Howard Gutierrez</Card.Title>
                    <small className="text-muted">Tractor driver</small>
                    <Card.Text>
                        Howard is a colleague of Anthony. They are friends who work together for a long time.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
           </div>
       </div>
    )
}

export default OurFarmers;