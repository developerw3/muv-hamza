import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
import Slider from 'react-slick'

class Influencers extends React.Component {

    render() {
        let { influencers } = this.props
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 4,
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
        if (influencers.length < 4) {
            settings.infinite = false;
            settings.slidesToShow = influencers.length
        } else {
            settings.infinite = true;
        }
        return (
            <Row className="mt-3">
                <Col md="12">
                    <hr/>
                    <h3 className="text-center">Other Influencers</h3>
                    <div className="pl-3 pr-3">
                        <Slider {...settings}> 
                            {influencers.map((influencer, idx) => {
                                return (
                                    <div className="carousel_item" key={idx}>
                                        <div className="thumbnail-content">
                                            <img alt="" className="thumbnail-1 img-rounded" src={influencer.followingAvatar ? influencer.followingAvatar : 'https://storage.googleapis.com/muvimages/establishments/27652_Central-Park_New-York-City_USA/27652_Belvedere_Castle2C_Central_Park_wk29789.jpg'}/>
                                        </div>
                                        <div className="carousel-description text-center">
                                            <h5 className="title mt-0 mb-0">{influencer.followingFirstName + ' ' + influencer.followingLastName}</h5>
                                            <p className="mb-0 desc"><small>{influencer.followingHandle}</small></p>
                                            <p>Follow</p>
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

export default Influencers