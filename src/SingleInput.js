import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleInput extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <label>{this.props.title}</label>
                <input type={this.props.type}
                       placeholder={this.props.placeholder}
                       onChange={this.props.controlFunc}
                       value={this.props.content}
                       id={this.props.id}/>
            </div>
            //onChange={ props.controlFunc } <== activate function (passed by props) on change event
            //value={props.content} <== get the value (passed by props) back from the state
        );
    }
}

SingleInput.propTypes = {
    type: PropTypes.string
};

export default SingleInput;