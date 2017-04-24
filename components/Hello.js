import React, { Component, PropTypes } from 'react';
import { ChangeText } from '../actions/ChangeText';

// const propTypes = {
//     text: PropTypes.object,
//     dispatch: PropTypes.func.isRequired,
//     FetchChangeText: PropTypes.func.isRequired,
// };
 
export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { dispatch, text }= this.props;
        console.log(text);
        dispatch(ChangeText(text));
    }

    render() {
        return (
            <h1 onClick={this.handleClick}> {this.props.text} </h1>
        );
    }
}