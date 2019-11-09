import React from 'react'

export default class Banner extends React.Component {
    render() {
        return (
        <div id="banner_section">
            <img alt="" style={{position: 'fixed'}} src="img/banner.png" id="banner_img" className="banner"/>
        </div>
        )
    }
}