import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
    // { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Why is this needed?</h2>
                        </header>
                        <p>Since the introduction of military UAV, or drones, the US has used them for good and bad. <br/>
                        The purpose of this project is raise awareness of exactly how and where our government is utilizing Drones.</p>
                        <ul className="actions">
                            <li><a href="https://en.wikipedia.org/wiki/UAVs_in_the_U.S._military" className="button">More About Military Drones</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>US Drone Statistics</h2>
                        </header>
                        <ul>
                            <li>MINIMUM CONFIRMED STRIKES: 4,990</li>
                            <li>TOTAL NUMBER OF CASUALTIES: 8,059-11,482</li>
                            <li>TOTAL NUMBER OF CIVILIAN CASUALTIES: 751-1,597</li>
                            <li>TOTAL NUMBER CHILD CASUALTIES: 252-359</li>
                        </ul>
                        <ul className="actions">
                            <li>* Statistics provided by <a href="https://www.thebureauinvestigates.com/projects/drone-war">The Bureau of Investigative Journalism</a></li>
                        </ul>
                    </section>

                    {/*<section id="three">*/}
                        {/*<h2>Other projects</h2>*/}

                        {/*<Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({*/}
                            {/*src,*/}
                            {/*thumbnail,*/}
                            {/*caption,*/}
                            {/*description*/}
                        {/*}))} />*/}
                    {/*</section>*/}

                    <section id="four">
                        <h2>Contact Us</h2>
                        <p>Hi there 👋🏽, you probably came here expecting some interesting visualizations and stuff. Our previous analytics implementation was not properly mapping the data 😅. We are working on a new implementation as well as some awesome visualizations 🚧🛠. To be notified of our releases, join our newsletter. We promise not to spam 😇.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Potomac, MD 20854<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="https://github.com/pbindustries/">pbindustriesapps@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-github"><span className="label">Github</span></h3>
                                        <a href="https://github.com/pbindustries/">pbindustries</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex