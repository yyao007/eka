import React, { Component } from 'react';
import Form1 from './scenes/Form1';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Form1 />
            </Provider>
        );
    }
}

export default App;
