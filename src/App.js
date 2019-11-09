import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'
import RootContainer from './views/RootContainer'
import './sass/app.scss'
import './App.css'

class App extends React.Component {
    render() {
        const store = createStore(rootReducer, applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        )
    }
}

export default App;
