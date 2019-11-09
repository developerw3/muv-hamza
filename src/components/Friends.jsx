import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
class Friends extends React.Component {

    
    render() {
        let {friends} = this.props;
        return (
            <React.Fragment>
                <h3>Friends</h3>
                <Row className="pl-2 pr-2">
                    {
                        friends.map((friend, idx) => {
                            return (
                                <Col md="4" key={idx} className="mb-4">
                                    <div className="d-flex justify-content-center flex-column align-items-center">
                                        <img alt="" className="mr-2 mb-3" style={{borderRadius: '50%'}} src={(friend.friendAvatar !== "" && friend.friendAvatar != null) ? friend.friendAvatar : "img/avatar.png"} width="90" height="90"/>
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <h5 className="mb-1">{friend.friendFirstName + ' ' + friend.friendLastName}</h5>
                                            <p className="text-muv">{friend.friendHandle}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </React.Fragment>
        )
    }
}

export default Friends