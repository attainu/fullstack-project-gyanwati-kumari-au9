import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../Container/Home';
import Header from './header';
import Footer from './footer';
import SignUp from './signUp';
import Login from './login';
import Mandi from '../Container/Mandi';
import Crops from './Crops';
import Livestock from './liveStock';
import FarmEquip from './FarmEquipment';
import KnowledgeCenter from './KnowledgeCenter';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header />
            <hr/>
            <div className="row">
                <div className="col-md-10">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/crops" component={Crops} />
                    <Route path="/liveStock" component={Livestock} />
                    <Route path="/farmEquip" component={FarmEquip} />
                    <Route path="/knowledgeCenter" component={KnowledgeCenter} />


                    {/* <Route path="/mandi" component={Mandi} /> */}

                    
                </div>
            </div>
           
            <Footer/>
        </BrowserRouter>
    )
}                                                                     

export default Routing;