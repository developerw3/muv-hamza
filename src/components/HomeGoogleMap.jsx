import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
function createMapOptions(maps) {
    return {
        zoomControlOptions: {
            style: maps.ZoomControlStyle.HORIZONTAL_BAR
          },
          mapTypeControlOptions: {
          },
          mapTypeControl: true
    }
}
class HomeGoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 40.7128,
                lng: -74.0059
            },
        }
    }

    render() {
        let { home } = this.props;
        return (
            <div className="mt-5 mb-5">
            <h3>Home</h3>
            <Row>
                <Col md={5}>
                    <h5 className="m-0 mb-2">{home ? home[0].homeStateName : ''}</h5>
                    <p className="m-0 mb-2">{home ? home[0].homeCityName + ' ' + home[0].homeCountryName : ''}</p>
                    <p className="home-description">{home ? home[0].homeAbout : ''}</p>
                </Col>
                <Col md={7}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyDLHHjl7qzCPSAUbwQ6WbipmWjmYYqaw0E"}}
                        defaultCenter={home ? {lat: parseFloat(home[0].homeLatitude), lng: parseFloat(home[0].homeLongitude)} : this.state.center}
                        defaultZoom={11}
                        options={createMapOptions}
                    >
                    </GoogleMapReact>
                </Col>
            </Row>
            </div>
        )
    }
}

export default HomeGoogleMap;