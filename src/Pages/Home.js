import React from 'react';
import Header from '../components/Header';
import Banner from '../Images/hero_bg_pk.jpg'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>Homepage</h1>
                <img src={Banner} className="img-fluid" alt="Responsive image"></img>
            </div>
        )
    }
}

export default Home;