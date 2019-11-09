import React from 'react'
import {
    Card, Row, Col
} from 'react-bootstrap'
import moment from 'moment'
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (         
            <Card className="bg-black text-white mb-3">
                <Card.Body className="pb-2">
                    <h3>About <span className="text-muv">@kanyewest</span></h3>
                    <p className="mb-4">{this.props.muver ? this.props.muver.muverAbout : ''}</p>
                    <Row>
                        <Col md={3}>
                            <label className="text-muv mr-2">Gender: </label>
                            <span>{this.props.muver ? (this.props.muver.muverGender ? 'Male' : 'Female') : 'Male'}</span>
                        </Col>
                        <Col md={3}>
                            <label className="text-muv mr-2">Living in: </label>
                            <span>{this.props.muver ? this.props.muver.muverLivingIn : ''}</span>
                        </Col>
                        <Col md={6}>
                            <label className="text-muv mr-2">Destinations: </label>
                            <span>{this.props.muver ? (this.props.muver.muverDestinations.length ? this.props.muver.muverDestinations[0].name + ', ' + this.props.muver.muverDestinations[1].name : this.props.muver.muverDestinations[0].name) : ''}</span>
                        </Col>
                        <Col md={3}>
                            <label className="text-muv mr-2">Birthday: </label>
                            <span>{this.props.muver ? (this.props.muver.muverBirthday ? moment(this.props.muver.muverBirthday).format('MMM Do YYYY') : '') : ''}</span>
                        </Col>
                        <Col md={4}>
                            <label className="text-muv mr-2">Line of Work: </label>
                            <span>{this.props.muver ? this.props.muver.muverLineOfWork : ''}</span>
                        </Col>
                    </Row>
                    <hr className="bg-dark mb-2"/>
                    <div className="d-flex justify-content-center">
                        Show more <i className="fas fa-angle-down" style={{marginLeft: '10px', marginTop: '6px'}}></i>
                    </div>
                </Card.Body>
            </Card>          
        );
    }
}

export default About;