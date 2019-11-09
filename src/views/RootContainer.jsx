import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import { routes } from '../routes.js';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';

class RootContainer extends React.Component {
    render() {
        let { isShow } = this.props.spinner
        return (
            <Router>
                <Loader className="loader-container" type="Rings" color="#fafafa" height={80} width={80} visible={isShow}/>
                <Header/>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            exact
                            key={i}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spinner: state.SpinnerReducer
    }
}

export default connect(mapStateToProps)(RootContainer)