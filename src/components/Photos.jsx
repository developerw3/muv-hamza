import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'

class Photos extends React.Component {

    render() {
        return (
            <Row className="mb-5">
                <Col md={12}>
                    <h3 className="mt-1 mb-2">Photos</h3>
                    <h5 className="mt-1 mb-2">One week in Barcelona</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <img alt="" src="https://storage.googleapis.com/muvimages/establishments/3665_The_Manor_New_Delhi_India/The_Manor_01.jpg" className="d-block w-100 pl-2 pr-2"/>
                    <div className="d-flex mt-3 pl-1 pr-1 justify-content-between" style={{overflowX: 'auto'}}>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/27655_Empire-State-Building/27655_A_night_view_from_the_observatory_wk62738.jpg"/></div>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/51397_Bahai-Lotus-Temple_New-Delhi_India/51397_Bahai-Lotus-Temple_New-Delhi_India_01.jpg"/></div>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/27652_Central-Park_New-York-City_USA/27652_Belvedere_Castle2C_Central_Park_wk29789.jpg"/></div>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/27655_Empire-State-Building/27655_A_night_view_from_the_observatory_wk62738.jpg"/></div>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/51397_Bahai-Lotus-Temple_New-Delhi_India/51397_Bahai-Lotus-Temple_New-Delhi_India_01.jpg"/></div>
                        <div className="m-1"><img alt="" style={{width: 170, height: 170}} src="https://storage.googleapis.com/muvimages/establishments/27652_Central-Park_New-York-City_USA/27652_Belvedere_Castle2C_Central_Park_wk29789.jpg"/></div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Photos;