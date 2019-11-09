import React from 'react'
import {
    Row, Col, Button
} from 'react-bootstrap'
import Slider from 'react-slick'
class HomeFavorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
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
            },
        }
    }

    render() {
        let favorites = this.props.homeFavorites
        let settings =  {...this.state.settings}
        if(favorites.length < 2) {
          settings.infinite = false;
          settings.slidesToShow = favorites.length;
        } 
        return(
            <Row className="mb-5">
                <Col md={4}>
                    <h3>My Home Favorites</h3>
                </Col>
                <Col md={8}>
                    <div className="trip-category-btn text-right">
                        <Button variant="outline-success" size="sm"><i className="fas fa-bed"></i>Stay</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-camera"></i>See</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-utensils"></i>Eat</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-glass-martini-alt"></i>Drink</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-tv"></i>Watch</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-running"></i>Play</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-spa"></i>Relax</Button>
                        <Button variant="outline-success" size="sm"><i className="fas fa-cart-plus"></i>Shop</Button> 
                    </div>
                </Col>
                <Col md={12}>
                    <div className="pl-1 pr-1">
                        <Slider {...settings}>
                            { 
                                (favorites).map((favorite, idx) => {
                                    return (
                                        <div className="carousel_item" key={idx}>
                                            <div className="thumbnail-content">
                                                <img alt="" className="thumbnail-1" src={favorite.favoritePicture}/>
                                                <div className="mask">
                                                    <div className="text-right">
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <div className="thumbnail-title">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                        <span>{favorite.favoriteName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-description">
                                                {favorite.favoriteDesc}
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                        </Slider>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default HomeFavorites;