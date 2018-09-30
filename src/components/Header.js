import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    {/*<a href="#" className="image avatar"><img src={avatar} alt="" /></a>*/}
                    <h1><strong>United States Drone Analytics</strong><br />
                    Analytics built using Elasticsearch and Kibana<br />
                     with live data from <a href="http://html5up.net">Drone Strike API</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
