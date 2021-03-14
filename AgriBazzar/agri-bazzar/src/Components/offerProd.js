import React from 'react';


const OfferProd = () => {
    return(
        <div className="container" style={{textAlign:"center"}}>
            <h3 style={{fontSize:"42pt"}}>What We Offer</h3>
            <h6>Products & Services</h6>
            <div className="row" style={{display:"flex",gap:"50px",marginTop:"50px"}}>
            <div className="col" md={{span:6}} style={{boxShadow:"2px 2px 2px 2px",marginLeft:"120px",padding:"20px"}}>
                <img src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-offen3.jpg" alt="" style={{float:"left"}}/>

                    <h3>Dairy Products</h3>
                    <p >
                        We are a renowned Processor, Supplier of Dairy Products,
                        which are highly acclaimed in the market for their 
                        freshness and purity.
                    </p>
                    <button style={{color:"#51AF2B",border:"0",backgroundColor:"white"}}>Read More</button>
            </div>
            <div className="col" md={{span:6}} style={{boxShadow:"2px 2px 2px 2px",padding:"20px"}}>
                    <img src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-offen2.jpg" alt="" style={{float:"left"}}/>
                    <h3>Orchard Fruits</h3>
                    <p >
                        We have your fruit favorites, and maybe some that 
                        you have never heard of! We offer apples, peaches,
                        nectarines, sweet cherries.
                    </p>
                    <button style={{color:"#51AF2B",border:"0",backgroundColor:"white"}}>Read More</button>
            </div>
            </div>

            <div className="row" style={{display:"flex",gap:"50px",marginTop:"50px"}}>
            <div className="col" md={{span:6}} style={{boxShadow:"2px 2px 2px 2px",marginLeft:"120px",padding:"20px"}}>
                <img src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-offen3.jpg" alt="" style={{float:"left"}}/>

                    <h3>Dairy Products</h3>
                    <p >
                        We are a renowned Processor, Supplier of Dairy Products,
                        which are highly acclaimed in the market for their 
                        freshness and purity.
                    </p>
                    <button style={{color:"#51AF2B",border:"0",backgroundColor:"white"}}>Read More</button>
            </div>
            <div className="col" md={{span:6}} style={{boxShadow:"2px 2px 2px 2px",padding:"20px"}}>
                    <img src="https://template63458.motopreview.com/mt-demo/63400/63458/mt-content/uploads/2017/05/mt-0983-home-offen3.jpg" alt="" style={{float:"left"}}/>
                    <h3>Dairy Products</h3>
                    <p >
                        We are a renowned Processor, Supplier of Dairy Products,
                        which are highly acclaimed in the market for their 
                        freshness and purity.
                    </p>
                    <button style={{color:"#51AF2B",border:"0",backgroundColor:"white"}}>Read More</button>
            </div>
            </div>
        </div>
       
    )
}

export default OfferProd;