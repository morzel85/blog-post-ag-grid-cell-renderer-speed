import React, { Component } from 'react';

export default class ReactClassRenderer extends Component {
    render() {        
        return (
            <span>RC: {this.props.value}</span>
        );
    }
}