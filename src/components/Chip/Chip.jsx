import React, { Component } from 'react';
import "./Chip.scss";

class Chip extends Component {
    render() {
        let classes = this.props.classes
        classes += ' chip'
        return (
            <span className={classes}>{ this.props.name }</span>
        );
    }
}

export default Chip;