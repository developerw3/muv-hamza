import React from 'react'
import Banner from '../components/Banner.jsx'
import {
    Container, Row, Col, Card
} from 'react-bootstrap'
import {
    Menu, 
} from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import * as Actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//
import Profile from '../components/Profile.jsx'
import About from '../components/About.jsx'
import UpComingTrip from '../components/UpComingTrip.jsx'
import HomeGoogleMap from '../components/HomeGoogleMap.jsx'
import HomeFavorites from '../components/HomeFavorites.jsx'
import LastTrip from '../components/LastTrip.jsx'
import PastTrip from '../components/PastTrip.jsx'
import Photos from '../components/Photos.jsx'
import Videos from '../components/Videos.jsx'
import TravelFavorites from '../components/TravelFavorites.jsx'
import Friends from '../components/Friends.jsx'
import Influencers from '../components/Influencers.jsx'
import Axios from 'axios'
import { Link, Element , Events, scroller } from 'react-scroll'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    componentWillMount() {
        this.props.spinnerHandle({isShow: true});
        // 9c768a02-d955-11e9-8174-42010a8e0003
        // e9b4e8ca-df97-11e9-8174-42010a8e0003
        // https://cors-anywhere.herokuapp.com/
        Axios.get('http://dev.restapi.muvtravel.com/api/public/member/e9b4e8ca-df97-11e9-8174-42010a8e0003').then(res => {
            this.setState({
                data: res.data
            })
            this.props.spinnerHandle({isShow: false});
            let goToContainer = new Promise((resolve, reject) => {
                Events.scrollEvent.register('end', () => {
                    resolve();
                    Events.scrollEvent.remove('end');
                });
                scroller.scrollTo('home', {
                    duration: 500,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                    offset: 30
                });
            });
            goToContainer.then()
        });
    }

    render() {
        return (
            <React.Fragment>
                <Banner/>
                    <Container className="home-container">
                        <Row>
                            <Col md={5} lg={4} className="mb-3" id="profile_section">
                                <Card className="bg-black text-white">
                                    <Card.Body>
                                        { this.state.data.muver ? 
                                            <Profile muver={this.state.data.muver}/>
                                            :<React.Fragment/>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={7} lg={8}>
                                {
                                    this.state.data.muver ? 
                                    <About muver={this.state.data.muver}/>
                                    : <React.Fragment/>
                                }
                                <Menu pointing secondary className="sticky-section-first">
                                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-150} duration={500} >Home</Link>
                                    <Link activeClass="active" to="photovideo" spy={true} smooth={true} offset={-150} duration={1000} >Photo & Video</Link>
                                    <Link activeClass="active" to="communate" spy={true} smooth={true} offset={-150} duration={1500} >Communate</Link>
                                    <Link activeClass="active" to="tripsec" spy={true} smooth={true} offset={-150} duration={1800} >Trips</Link>
                                    <Link activeClass="active" to="bucket" spy={true} smooth={true} offset={-150} duration={2000} >Bucket Lists</Link>
                                </Menu>
                                <Card className="bg-black text-white">
                                    <Card.Body>
                                        {
                                            this.state.data.muver ? 
                                            <React.Fragment>
                                                <UpComingTrip trips={this.state.data.muver.trips[0].futureTrips}/>
                                                <Element name="home" className="element">
                                                    <HomeGoogleMap home={this.state.data.home}/>
                                                </Element>
                                                <Element name="communate" className="element mt-5">
                                                    <HomeFavorites homeFavorites={this.state.data.home[0].homeFavorites}/>
                                                </Element>
                                            </React.Fragment>
                                            : <React.Fragment/>
                                        }
                                        <Element name="tripsec" className="element">
                                            <Row className="mb-5">
                                                <Col md={12}>
                                                    {
                                                        this.state.data.muver ? 
                                                        <React.Fragment>
                                                                <h3>Trips</h3>
                                                                <LastTrip trips={this.state.data.muver.trips[0].pastTrips}/>
                                                                <PastTrip trips={this.state.data.muver.trips[0].pastTrips}/>
                                                        </React.Fragment>
                                                        : <React.Fragment/>
                                                    }
                                                </Col>
                                            </Row>
                                        </Element>
                                        {
                                            this.state.data.muver ? 
                                                <React.Fragment>
                                                    <Element name="photovideo" className="element">
                                                        <Photos trip={this.state.data.muver.trips[0].currenTrips[0]}/>
                                                        <Videos settings={this.state.settings} trip={this.state.data.muver.trips[0].currenTrips[0]}/>
                                                        <TravelFavorites trips={this.state.data.muver.muverTravelFavorites}/>
                                                    </Element>
                                                </React.Fragment>
                                                : <React.Fragment/>
                                        }
                                        {
                                            this.state.data.muver ?
                                                <React.Fragment>
                                                    <Element name="bucket" className="element">
                                                        <Friends friends={this.state.data.muver.muverFriends}/>
                                                        <Influencers influencers={this.state.data.muver.muverFollowers}/>
                                                    </Element>
                                                </React.Fragment>
                                                : <React.Fragment/>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        spinnerHandle: Actions.spinnerHandle
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage);