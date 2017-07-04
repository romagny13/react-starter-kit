import React, { PropTypes } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
             <div>
                <Header />
                <div className="container">
                   <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
                </div>
            </div>            
            </BrowserRouter>             
        );
    }
}

export default App;