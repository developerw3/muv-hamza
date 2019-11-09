import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
import Slider from 'react-slick'

class Videos extends React.Component {

    render() {
        let {trip} = this.props;
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
        if (trip.tripPhotoGallery.length < 2) {
            settings.infinite = false;
            settings.slidesToShow = trip.tripPhotoGallery.length;
        } else {
            settings.infinite = true;
        }

        return (
            <Row className="mb-5">
                <Col md="12">
                    <h3 className="mt-1 mb-2">Videos</h3>
                    <h5 className="mt-1 mb-2">{trip.tripDescription}</h5>
                    <video className="w-100 pl-2 pr-2" controls>
                        <source src={trip.tripVideoGallery[0].videoPath} type="video/mp4"></source>
                    </video>
                    <div className="p-2 ml-2 mr-2 bg-light text-dark text-center">
                        {trip.tripVideoGallery[0].videoDescription}
                    </div>
                    <div>
                        <Slider {...settings}>
                            {trip.tripPhotoGallery.map((gallery, idx) => {
                                return (
                                    <div key={idx} className="carousel_item">
                                        <div className="thumbnail-content">
                                            <img alt="" className="thumbnail-1" src={gallery.photoPath ? gallery.photoPath : 'https://storage.googleapis.com/muvimages/establishments/27652_Central-Park_New-York-City_USA/27652_Belvedere_Castle2C_Central_Park_wk29789.jpg'}/>
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

export default Videos;
