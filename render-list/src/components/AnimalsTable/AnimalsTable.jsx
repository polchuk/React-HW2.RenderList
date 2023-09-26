import React, { Component } from 'react';
import AnimalsTableRow from '../AnimalsTableRow/AnimalsTableRow';

export default class AnimalsTable extends Component {

    state = {
        animals: [
            { type: `turtle`, icon: `🐢` },
            { type: `octopus`, icon: `🐙` },
            { type: `fish`, icon: `🐠` },
            { type: `flamingo`, icon: `🦩` },
            { type: `penguin`, icon: `🐧` }
        ],
        borderWidth: 1
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState((actualState) => {
                var animalsCopy = [...actualState.animals];
                animalsCopy[this.randomInteger(0, animalsCopy.length)].active = true;
                var activeCount = animalsCopy.filter(item => item.active).length;
                var borderWidth = 1;
                if (activeCount === animalsCopy.length) {
                    borderWidth = 20;
                    clearInterval(intervalId);
                } else if (activeCount > animalsCopy.length / 2) {
                    borderWidth = 10;
                }
                return { animals: animalsCopy, borderWidth: borderWidth }
            }, () => {
                console.log(this.state.animals);
            })
        }, 2000);
    }

    componentDidUpdate() {
        console.log(`in componentDidUpdate AnimalsTable`, this.props);
    }

    render() {
        let { animals, borderWidth } = this.state;

        return animals.length ? (
            <table style={{borderWidth, borderColor: 'black', borderStyle: 'solid'}}>
                <tbody>
                    {animals.map((animal, index) =>
                        <AnimalsTableRow animal={animal} key={index} />
                    )}
                </tbody>
            </table>
        ) : null;
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}