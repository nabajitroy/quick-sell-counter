import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
        this.props.parentCallback("Hello from child")
    }
    render() {
        const { data } = this.state;
        return (

            <h1>Hello{data}</h1>
        );
    }
}
