import React from 'react'
import {
    Row, Col 
} from 'react-bootstrap'
import Slider from 'react-slick'

class PastTrip extends React.Component {

    render() {
        let {trips} = this.props
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        }
        if (trips.length < 2) {
            settings.infinite = false;
            settings.slidesToShow = trips.length
        } else {
            settings.infinite = true;
        }
        return (
            <div className="mt-4">
                <h4>Past Trips</h4>
                <Row>
                    <Col md={12}>
                        <div className="pl-1 pr-1">
                            <Slider {...settings}>
                                { trips.map((trip, idx) => {
                                    return (
                                        <div className="carousel_item" key={idx}>
                                            <div className="thumbnail-content">
                                                <img alt="" className="thumbnail-1" src={trip.tripPhotoGallery.length ? trip.tripPhotoGallery[0].photoPath : 'https://storage.googleapis.com/muvimages/establishments/27655_Empire-State-Building/27655_A_night_view_from_the_observatory_wk62738.jpg'}/>
                                            </div>
                                            <div className="carousel-description">
                                                <h4 className="mt-1 mb-1">{trip.tripName}</h4>
                                                <p className="mt-0" style={{fontSize: 12}}>{trip.tripStartDate + ' - ' + trip.tripEndDate}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PastTrip;