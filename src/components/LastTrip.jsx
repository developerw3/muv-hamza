import React from 'react'
import {
    Row, Col, Carousel
} from 'react-bootstrap'
class LastTrip extends React.Component {

    render() {
        let {trips} = this.props;
        return (
            <div>
                <h4>Last Trip</h4>
                <Row>
                    <Col md={8} className="pl-4">
                        <Carousel interval={1500}>
                            {
                                trips[0].tripPhotoGallery.map((gallery, idx) => {
                                    return (
                                        <Carousel.Item key={idx}>
                                            <img alt="" src={gallery.photoPath}/>
                                        </Carousel.Item>
                                    )
                                })
                            }
                            <Carousel.Item>
                                <img alt="" className="d-block w-100" src="https://storage.googleapis.com/muvimages/establishments/27652_Central-Park_New-York-City_USA/27652_Belvedere_Castle2C_Central_Park_wk29789.jpg"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={4}>
                        <p className="mb-1"><small>{trips[0].tripStartDate + ' - ' + trips[0].tripEndDate}</small></p>
                        <h4 className="mt-1 mb-3">{trips[0].tripName}</h4>
                        <p>
                            {trips[0].tripDescription}
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LastTrip;