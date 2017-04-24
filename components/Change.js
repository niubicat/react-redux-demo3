import React, { Component, PropTypes } from 'react';
import { ButtonClick } from '../actions/ButtonClick';

// const propTypes = {
//     text: PropTypes.object,
//     dispatch: PropTypes.func.isRequired,
//     FetchButtonClick: PropTypes.func.isRequired,
// };

export default class Change extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { dispatch, text }= this.props;
        console.log(text);
        dispatch(ButtonClick(text));
    }

    render() {
        return (
            <button onClick={this.handleClick}>change</button>
        );
    }
}