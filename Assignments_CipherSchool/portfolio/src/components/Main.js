import React, { Component } from 'react';
import portfolioData from './Portfoliodata';
import Header from './Header';
import Body from './Body';
import End from './End';

class Main extends Component {
    state = {
        portfolio: portfolioData
    }
    render() {
        return (
            <div>
                <Header/>
                <Body portfolioDetails={this.state.portfolio} />
                <End />
            </div>
        )
    }
}
export default Main;