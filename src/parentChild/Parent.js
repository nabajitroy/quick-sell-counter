import React from 'react';
import Child from './Child'

export default class Parent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            childData: "hello My child"
        }
    }

    handleClick = (childData) => {
        console.log(childData)
    }

    render() {
        return (
            <div>
                <h1>Hello Parent</h1>
                <Child data={this.state.childData} parentCallback={this.handleClick} />
            </div>
        );
    }
}



