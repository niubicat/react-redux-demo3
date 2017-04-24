import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Change from '../components/Change';
import Hello from '../components/Hello';

class App extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, text } = this.props;
        return (
            <div>
                <Hello dispatch={dispatch} text={text}/>
                <Change {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { text } = state;
    return { 
        text, 
    };
}

export default connect(mapStateToProps)(App)

