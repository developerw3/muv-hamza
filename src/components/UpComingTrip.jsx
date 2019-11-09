import React from 'react'
import {
    Row, Col, Button
} from 'react-bootstrap'
import {
    Rating
} from 'semantic-ui-react'

class UpComingTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            activeTripGallery: [],
            isAll: false,
            name: "Boston",
            activities: [{
                activityEstabID: "25253",
                activityID: "13285",
                activityLocationName: "Freedom Trail",
                activityName: null,
                activityPicture: "https://storage.googleapis.com/muvimages/establishments/25253_Freedom-Trail_Boston_USA/25253_Freedom-Trail_Boston_USA_01.jpg",
                activityScore: 0.6,
                activityTypes: [{typeID: "1", typeName: "see"}],
                typeID: "1",
                typeName: "see",
                }, {
                activityEstabID: "25312",
                activityID: "13207",
                activityLocationName: "Good Harbor Beach",
                activityName: null,
                activityPicture: "https://storage.googleapis.com/muvimages/establishments/25312_Good-Harbor-Beach/25312_Good-Harbor-Beach_01.jpg",
                activityScore: 0,
                activityTypes: [{typeID: "6", typeName: "play"}],
                typeID: "6",
                typeName: "play",
                }, {
                activityEstabID: "25323",
                activityID: "13208",
                activityLocationName: "Classic Harbor Line Boston MA Day Tours",
                activityName: null,
                activityPicture: "https://storage.googleapis.com/muvimages/establishments/25323_Classic-Harbor-Line-Boston-MA-Day-Tours/25323_Classic-Harbor-Line-Boston-MA-Day-Tours_01.jpg",
                activityScore: 0,
                activityTypes: [{typeID: "6", typeName: "play"}]
            }]
        }
    }

    componentWillMount() {
        this.setState({
            trips: this.props.trips,
            activeTripGallery: [this.props.trips[0].tripPhotoGallery[0]]
        })
    }   
    render() {
        return (
            <div className="pt-3">
                <h3 className="text-title">Upcoming Trip</h3>
                <div style={{position: 'relative'}}>
                    <Row>
                        <Col md={5}>
                            <p className="m-0">{this.state.trips[0].tripStartDate + ' ' + this.state.trips[0].tripEndDate}</p>
                            <p className="m-0">
                                {this.state.trips[0].tripDestinations.map((destination, idx) => {
                                    return (
                                        this.state.trips[0].tripDestinations.length === idx + 1 ?
                                        <b key={idx}>{destination.name}</b>
                                        : <b key={idx}>{destination.name}-</b>
                                    )
                                })}
                            </p>
                            <p>Current cost: ${this.state.trips[0].tripCost}</p>
                            <p>{this.state.trips[0].tripDescription}</p>
                            <h5>
                                <b>Travel companions: </b> 
                                {
                                    this.state.trips[0].tripCompanions.map((companion, idx) => {
                                        return <span key={idx}>@{companion.companionName} </span>
                                    })
                                }
                            </h5>
                        </Col>
                        <Col md={7}>
                            <div style={{background: 'linear-gradient(-180deg, #1b1e21 40%, #212529 60%, #6c757d)', height: '100%'}}>
                                <div className="steps">
                                {
                                    this.state.activities.map((activity, idx) => {
                                        return (
                                            <div className="step" key={idx}>
                                                {this.state.activities.length <= 1 ? <></> : <div className="title"></div>}
                                                <Row className="p-2">
                                                    <Col md={6}>
                                                        <img alt="" style={{width: '100%', height: 120}} src={activity.activityPicture}/>
                                                    </Col>
                                                    <Col md={6}>
                                                        <p className="m-0"><small>{this.state.name}</small></p>
                                                        <h4 className="mt-1 mb-3">{activity.activityLocationName}</h4>
                                                        <Rating defaultRating={activity.activityScore} maxRating={5} disabled className="mb-2"/>
                                                        <div>
                                                            <Button variant="outline-success" size="sm" className="btn-rounded mr-1">Museum</Button>
                                                            <Button variant="outline-success" size="sm" className="btn-rounded mr-1">Art</Button>
                                                            <Button variant="outline-success" size="sm" className="btn-rounded mr-1">Exposition</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default UpComingTrip;