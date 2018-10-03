import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    {/*<a href="#" className="image avatar"><img src={avatar} alt="" /></a>*/}
                    <h1><strong>US Drone Analytics</strong><br />
                    Built with the Elastic Stack<br />
                     and live drone <a href="http://html5up.net">data</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
