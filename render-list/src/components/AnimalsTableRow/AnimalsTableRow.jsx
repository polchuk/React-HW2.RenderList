import React, { Component } from 'react';

export default class AnimalsTableRow extends Component {

    componentDidUpdate() {
        console.log(`in componentDidUpdate AnimalsTableRow`, this.props);
    }

    render() {
        let {animal} = this.props;

        return (
            <tr style={animal.active && {color: 'green', fontWeight: 'bold'}}>
                <td>{animal.type}</td>
                <td>{animal.icon}</td>
            </tr>
        );
    }
}