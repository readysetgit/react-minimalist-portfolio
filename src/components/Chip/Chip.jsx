import React, { Component } from 'react';
import "./Chip.scss";

class Chip extends Component {
    render() {
        return (
            <span className="chip">{ this.props.name }</span>
        );
    }
}

export default Chip;