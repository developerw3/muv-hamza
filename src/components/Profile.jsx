import React from 'react'
import {
    Row, Col, Button
} from 'react-bootstrap'

class Profile extends React.Component {

    render() {
        return (
            <div className="text-center">
                <img className="img-rounded" src="img/avatar.png" alt="Avatar" width="100" height="100"/>
                <h3 className="mb-1 mt-1"><b>{this.props.muver ? this.props.muver.muverFirstName + ' ' + this.props.muver.muverLastName : ''}</b></h3>
                <p className="mb-4 mt-1 text-muv">@Fabio</p>
                <p className="mb-4">{this.props.muver ? this.props.muver.muverBanner : ''}</p>
                <Row>
                    <Col>
                        <Button variant="outline-success" size="md" block className="profile-btn">Friend Request</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-success" size="md" block className="profile-btn">Follow</Button>
                    </Col>
                </Row>
                <div className="social-content mt-2">
                    <i className="fab fa-facebook text-muv"></i>
                    <i className="fab fa-twitter text-muv"></i>
                    <i className="fab fa-instagram text-muv"></i>
                    <i className="fab fa-pinterest text-muv"></i>
                    <i className="fab fa-snapchat text-muv"></i>
                </div>
                <div className="number-content mt-2">
                    <div>
                        <i className="fas fa-user-tag text-muv"></i>
                        <h5 className="m-0"><b>602K</b></h5>
                        <p className="m-0"><small>Followers</small></p>
                    </div>
                    <div>
                        <i className="fas fa-plane-departure text-muv"></i>
                        <h5 className="m-0"><b>75</b></h5>
                        <p className="m-0"><small>Trips</small></p>
                    </div>
                    <div>
                        <i className="fas fa-trophy text-muv"></i>
                        <h5 className="m-0"><b>MUV</b></h5>
                        <p className="m-0"><small>Muse</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;