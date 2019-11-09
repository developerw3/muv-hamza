import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
import Slider from 'react-slick'

class TravelFavorites extends React.Component {

    render() {
        let { trips } = this.props
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
            settings.slidesToShow = trips.length;
        } else {
            settings.infinite = true;
        }
        return (
            <Row className="mb-5">
                <Col md="12">
                    <h3>Travel Favorites</h3>
                    <div>
                        <Slider {...settings}>
                            {trips.map((trip, idx) => {
                                return (
                                    <div className="carousel_item" key={idx}>
                                        <div className="thumbnail-content">
                                            <img alt="" className="thumbnail-1" src={trip.favoritePicture}/>
                                            <div className="mask">
                                                <div className="text-right">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="thumbnail-title">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>{trip.favoriteName}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-description">
                                            {trip.favoriteDesc}
                                        </div>
                                    </div>  
                                )
                            })}
                        </Slider>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default TravelFavorites;